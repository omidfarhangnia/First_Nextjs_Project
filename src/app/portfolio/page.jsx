import Image from "next/image";
import Link from "next/link";

export default function Portfolia() {
  return (
    <div>
      <h3 className="mb-[20px] text-[40px] font-[500]">Choose a gallery</h3>
      <div className="flex h-[350px] justify-between">
        <Link className="relative w-[30%]" href="/portfolio/illustrations">
          <div>
            <Image
              className="absolute left-0 top-0 h-full w-full object-cover"
              width="400"
              height="400"
              alt="this is card image"
              src="/illustration.png"
            />
            <span className="absolute bottom-0 left-0 p-[15px] text-[25px] capitalize">
              illustrations
            </span>
          </div>
        </Link>
        <Link className="relative w-[30%]" href="/portfolio/websites">
          <div>
            <Image
              className="absolute left-0 top-0 h-full w-full object-cover"
              width="400"
              height="400"
              alt="this is card image"
              src="/websites.jpg"
              priority
            />
            <span className="absolute bottom-0 left-0 p-[15px] text-[25px] capitalize">
              websites
            </span>
          </div>
        </Link>
        <Link className="relative w-[30%]" href="/portfolio/apps">
          <div>
            <Image
              className="absolute left-0 top-0 h-full w-full object-cover"
              width="400"
              height="400"
              alt="this is card image"
              src="/apps.jpg"
            />
            <span className="absolute bottom-0 left-0 p-[15px] text-[25px] capitalize">
              application
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
