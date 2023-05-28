import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import './styles.css';

const PopoverOne = () => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}> Get started with your free trial!
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverOne;