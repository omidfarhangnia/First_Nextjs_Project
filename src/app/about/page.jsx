import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="mb-[40px] flex h-[30%] items-end bg-[#828080] text-white">
        <div className="flex h-full w-auto flex-col justify-center bg-[#53C28B] px-[30px]">
          <h2 className="text-[30px] font-[800]">Digital Storytellers</h2>
          <h4 className="text-[24px] font-[400]">
            Handcrafting award winning digital experiences
          </h4>
        </div>
      </div>
      <div className="flex justify-between text-white">
        <div className="flex w-[45%] flex-col gap-[15px]">
          <h3 className="text-[30px] font-[600]">Who Are We?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
          <p>
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex w-[45%] flex-col gap-[15px]">
          <h2 className="text-[30px] font-[600]">What We Do?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
          </p>
          <ul>
            <li>- Dynamic Websites</li>
            <li>- Fast and Handy</li>
            <li>- Mobile Apps</li>
          </ul>
          <Link href={"/contact"}>
            <button className="rounded-[20px] bg-[#53C28B] px-[30px] py-[15px] text-[20px]">
              contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
