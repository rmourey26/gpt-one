import Image from "next/image";
import ImageDesktop from "../public/illustration-woman-online-desktop.svg";
import Box from "../public/illustration-box-desktop.svg";

const DesktopImage = () => {
  return (
    <>
      <div className='relative overflow-hidden w-[465px] h-full'>
        <Image
          src={ImageDesktop}
          alt='Desktop-woman-online'
          className='relative left-[-5rem] bottom-[-7rem]'
        />
      </div>
      <Image
        src={Box}
        alt='box'
        className='absolute left-[-6rem] top-[15rem] z-10'
      />
    </>
  );
};

export default DesktopImage;