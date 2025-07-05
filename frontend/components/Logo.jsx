import Image from "next/image";

const Logo = ({ width, height, className }) => {
  return (
    <div className={`relative group ${className}`} style={{ width, height }}>
      {/* الصورة الأساسية */}
      <Image
        alt="DeverCrowd logo"
        src="/assets/logo.png"
        width={width}
        height={height}
        className="absolute top-0 left-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
      />

      {/* الصورة الملونة عند الهوفر */}
      <Image
        alt="DeverCrowd logo colored"
        src="/assets/logo-colored.png"
        width={width=96}
        height={height=32}
        className="absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      />
    </div>
  );
};

export default Logo;
