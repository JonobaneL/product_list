import Image from "next/image";
import Link from "next/link";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <header className="w-full h-16 flex justify-center px-6 sm:px-10 lg:px-20 shadow-md">
      <div className="max-w-big-screen h-full w-full flex justify-between items-center">
        <Link href="/">
          <Image
            className="w-20"
            src="/assets/logo.svg"
            alt="logo"
            width={80}
            height={30}
          />
        </Link>
        <div className="w-[12rem] sm:w-[16rem]">
          <SearchField />
        </div>
      </div>
    </header>
  );
};

export default Header;
