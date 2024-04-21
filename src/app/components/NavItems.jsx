"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
const NavItems = ({ title, param }) => {
  const searchParams = useSearchParams();
  const gener = searchParams.get("genre");
  return (
    <Link href={`/?genre=${param}`} className={`hover:text-amber-600 font-semibold ${gener===param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}`}>
      <p className="uppercase hidden sm:inline">{title}</p>
    </Link>
  );
};

export default NavItems;
