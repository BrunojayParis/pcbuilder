import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface NavProps {
  logo: StaticImageData;
}

const Nav: FC<NavProps> = ({ logo }) => {
  return (
    <header className="w-full bg-gray-900 text-white h-20 text-lg font-bold fixed z-20">
      <nav className="flex items-center h-full mx-10 justify-between ">
        <a href="/">
          <Image src={logo} alt="logo" width={60} height={60} priority />
        </a>
        <ul className="hidden md:flex gap-12 ml-16 w-full items-center ">
          <li>
            <Link href="/Mini1">Javelin</Link>
          </li>
          <li>
            <Link href="/Mini2">Hellfire</Link>
          </li>
          <li>
            <Link href="/Mini3">Tomahawk</Link>
          </li>
          <li>
            <Link href="/Mini4">Harpoon</Link>
          </li>
        </ul>
        <div className="hidden md:flex gap-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Nav;
