import Image from "next/image";
import ImageMobile from "../public/illustration-woman-online-mobile.svg";

const MobileImage = () => {
  return (
    <div className="p-0 m-0">
      <Image
        src={ImageMobile}
        alt='Women with computer-mobile'
        width={230}
        height={230}
        className='relative top-[-6.5rem]'
      />
    </div>
  );
};

export default MobileImage;