"use client";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="xl:flex fixed z-50 items-center sm:left-[25%] sm:w-[50%] lg:left-[30%] lg:w-[40%] xl:left-[37.5%] xl:w-[25%] w-full top-5">
        <Nav />
      </header>
    </>
  );
};

export default Header;
