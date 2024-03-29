import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  photo: StaticImageData;
  bgColor?: string;
  href: string;
}

const Card: FC<CardProps> = ({ title, subtitle, photo, href }) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center p-10 w-full bg-slate-500 rounded-lg shadow-lg text-black hover:bg-black hover:text-white"
    >
      <h2 className="text-2xl font-bold mb-auto">{title}</h2>
      <p className="text-lg font-medium mt-4">{subtitle}</p>
      <Image
        src={photo}
        alt="javelin"
        className="object-cover h-auto mt-auto"
      />
    </Link>
  );
};

export default Card;
