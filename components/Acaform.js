import React from "react";

import { useState } from "react";

const Acaform = () => {

  const [description, setDescription] = useState("");

  const callAca = () => {

    // 👇 Send a fetch request to Backend API.

    fetch("/api/aca", {

      method: "POST",

      body: JSON.stringify({

        description,

      }),

      headers: {

        "content-type": "application/json",

      },

    }).catch((e) => console.log(e));

  };

  return (

    <div>

      <form

        onSubmit={(e) => {

          e.preventDefault();

          callAca();

        }}

      >

        <input

          name="description"

          placeholder="Search plans..."

          value={description}

          onChange={(e) => setDescription(e.target.value)}

        ></input>

        <button type="submit">ACA Call</button>

      </form>

    </div>

  );

};

export default Acaform;

