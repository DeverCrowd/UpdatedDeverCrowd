import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="relative flex flex-col justify-center w-full overflow-hidden lg:min-h-[50vh] px-5 sm:px-6 lg:px-12 pt-6 md:pt-12 border-t border-primary"
      >
        <div className="flex gap-7">
            {/* logo */}
          <div className="relative flex flex-col w-2/3  items-center">
            <Logo width={1000} height={159} className="opacity-10" />
            <div className="flex flex-col relative -top-40 -left-12 gap-2">
              <p className="font-extrabold xl:xl:text-5xl text-2xl">
                Dever<span className="text-primary">Crowd</span>{" "}
              </p>
              <p className="text-white/60 text-sm">©2025 Dever Crowd Ltd.</p>
            </div>
          </div>
          {/* info */}
          <div className="w-1/3  flex justify-center items-start gap-15 pt-15">
            <div className="flex flex-col gap-1 items-start"> 
                <h3 className="pb-5">SITE</h3>
                <Link href="#home" className="text-white/50 hover:text-primary transition duration-100">Home</Link>
                <Link href="#about" className="text-white/50 hover:text-primary transition duration-100">About</Link>
                <Link href="#service" className="text-white/50 hover:text-primary transition duration-100">Service</Link>
                <Link href="#works" className="text-white/50 hover:text-primary transition duration-100">Works</Link>
            </div>
            <div className="flex flex-col gap-1 items-start"> 
                <h3 className="pb-5">SOCIAL</h3>
                <Link href="#home" className="text-white/50 hover:text-primary transition duration-100">GitHub</Link>
                <Link href="#about" className="text-white/50 hover:text-primary transition duration-100">Instgram</Link>
                <Link href="#service" className="text-white/50 hover:text-primary transition duration-100">TikTok</Link>
                <Link href="#works" className="text-white/50 hover:text-primary transition duration-100">Facebook</Link>
                <Link href="#works" className="text-white/50 hover:text-primary transition duration-100">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
