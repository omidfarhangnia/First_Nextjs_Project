import Link from "next/link";

const links = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

export default function Navbar() {
  return (
    <div className="flex w-full max-w-[1250px] items-center justify-between text-[18px]">
      <div className="font-bold uppercase">
        <Link href={"/"}>lamamia</Link>
      </div>
      <div className="flex gap-[20px]">
        {links.map((link) => {
          return (
            <Link
              className="border-b-solid border-b-[2px] border-b-transparent hover:border-b-[#bbbbbb]"
              key={link.id}
              href={link.url}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
