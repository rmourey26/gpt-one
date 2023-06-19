import { useState } from "react";

const identity = (x) => x;

const KEY = "persistentState";

const defaultSerializer = { save: identity, revive: identity };

const serializers = {
  Date: {
    revive: (value) => value && new Date(Date.parse(value)),
    save: (value) => value && value.toISOString()
  }
};

const storage = localStorage;

const usePersistentState = (key, init) => {
  const data = KEY in storage ? JSON.parse(storage[KEY]) : {};

  const savedEntry = data[key];
  let savedValue = init;
  if (savedEntry) {
    const serializer = serializers[savedEntry.type] ?? defaultSerializer;
    savedValue = serializer.revive(savedEntry.value);
  }

  const [state, setState] = useState(savedValue);

  const set = (value) => {
    let savable = { value };
    try {
      if (value === null || value === undefined) {
        savable = value;
      } else {
        const proto = Object.getPrototypeOf(value);
        const type = proto.constructor.name;
        if (value instanceof Object) {
          const serializer = serializers[type];
          if (serializer) {
            savable = { value: serializer.save(value), type };
          }
        }
      }
      const newData = { ...data, [key]: savable };
      storage.setItem(KEY, JSON.stringify(newData));
    } catch (e) {
      console.warn("Enable to persist key %o with value %o", key, value);
    }
    setState(value);
  };

  return [state, set];
};

export default usePersistentState;