import Image from "next/image";
import ImageMobile from "../public/health-insurance-agent.svg";

const MobileImage = () => {
  return (
    <div className="p-0 m-0">
      <Image
        src={ImageMobile}
        alt='health-insurance-agent-mobile'
        width={230}
        height={230}
        className='relative top-[-6.5rem]'
      />
    </div>
  );
};

export default MobileImage;