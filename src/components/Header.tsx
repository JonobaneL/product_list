import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-16 flex justify-center px-20 shadow-md">
      <div className="max-w-big-screen h-full w-full flex justify-between items-center">
        <Image
          className="w-20"
          src="/logo.svg"
          alt="logo"
          width={80}
          height={30}
        />
        <div className="w-[16rem] h-8 border border-gray-400 rounded-md"></div>
      </div>
    </header>
  );
};

export default Header;
