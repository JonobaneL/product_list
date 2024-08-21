"use client";
import { useRouter } from "next/navigation";
const BackNav = () => {
  const router = useRouter();

  return (
    <div className="w-fit mb-4 flex items-center" onClick={() => router.back()}>
      <img className="size-5 rotate-90" src="/assets/arrow.svg" alt="arrow" />
      <p className="underline text-primary cursor-pointer">Повернутись назад</p>
    </div>
  );
};

export default BackNav;
