import Image from "next/image";
import Link from "next/link";
import Banner from "./Banner";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Image
          src="https://avatars.githubusercontent.com/u/66319691?v=4"
          width={50}
          className="rounded-full"
          height={50}
          alt="logo"
        />
      </div>
      <div></div>
    </header>
  );
};

export default Header;
