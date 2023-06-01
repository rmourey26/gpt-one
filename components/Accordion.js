import { useState } from "react";
import Image from "next/image";
import Arrow from "../public/icon-arrow-down.svg";

const Accordion = ({ title, content, index }) => {
  const [active, setActive] = useState(null);
  const handleToggle = (index) => {
    active === index ? setActive(null) : setActive(index);
  };

  return (
    <div className='m-0 p-0 w-[260px] md:w-[350px]'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center gap-3 my-2'>
          <p
            className={
              active === index
                ? "text-darkBlue text-xs font-bold cursor-pointer"
                : "text-DarkGrayishBlue text-xs cursor-pointer"
            }
            onClick={() => handleToggle(index)}>
            {title}
          </p>

          <Image
            src={Arrow}
            alt='arrow-icon'
            onClick={() => handleToggle(index)}
            className={
              active === index
                ? "cursor-pointer w-[10px] h-[8px] rotate-180"
                : "cursor-pointer w-[10px] h-[8px]"
            }
          />
        </div>
        <hr
          className={
            active === index
              ? "border-b-1 border-LightGrayishBlue relative top-[50px]"
              : "border-b-1 border-LightGrayishBlue relative top-[8px]"
          }></hr>
      </div>

      <p
        onClick={() => handleToggle(index)}
        className={
          active === index
            ? "text-DarkGrayishBlue text-[0.6rem] w-[15rem] md:w-[20rem] p-0 m-0 cursor-pointer"
            : "invisible max-h-0"
        }>
        {content}
      </p>
    </div>
  );
};

export default Accordion;
