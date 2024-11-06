import Image from "next/image";
import Link from "next/link";

const images = [
  {
    alt: "this is facebook logo",
    width: 20,
    height: 20,
    src: "/facebook__img.png",
  },
  {
    alt: "this is youtube logo",
    width: 20,
    height: 20,
    src: "/youtube__img.png",
  },
  {
    alt: "this is instagram logo",
    width: 20,
    height: 20,
    src: "/instagram__img.png",
  },
  {
    alt: "this is twitter logo",
    width: 20,
    height: 20,
    src: "/twitter__img.png",
  },
];

export default function Footer() {
  return (
    <div className="flex w-full max-w-[1250px] items-center justify-between text-[14px]">
      <div>
        <div>©2023 Lamania. All rights reserved.</div>
        <div>
          for watching the main source{" "}
          <Link
            className="text-[16px] underline"
            target="_blank"
            href={"https://youtu.be/VE8BkImUciY?si=XYycy2gxWalyrR9L"}
          >
            click here
          </Link>
        </div>
      </div>
      <div className="flex gap-[10px]">
        {images.map((img, i) => {
          return (
            <div key={i}>
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
