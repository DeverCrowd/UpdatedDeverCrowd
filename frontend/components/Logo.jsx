import Image from "next/image";

const Logo = ({ width, height,className }) => {
  return (
    <Image
      alt="DeverCrowd logo"
      width={width}
      height={height}
      src="/logo.png"
      className={`${className}`}
    />
  );
};

export default Logo;
