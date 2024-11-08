import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="mb-[30px] w-[80%] bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-[80px] font-[700] leading-[1em] text-transparent">
          Better design for your digital products.
        </h1>
        <p className="w-[80%] text-[23px]">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href={"/portfolio"}>
          <button className="mt-[20px] rounded-[10px] bg-[#53C28B] px-[30px] py-[15px] font-[500] text-white">
            See Our Works
          </button>
        </Link>
      </div>
      <Image
        width={400}
        height={400}
        alt="this is hero image"
        src={"/hero.png"}
      />
    </div>
  );
}
