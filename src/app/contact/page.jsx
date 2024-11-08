import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <h1 className="mb-[40px] text-center text-[60px] font-[600]">
        lets Keep in Touch
      </h1>
      <div className="flex items-center justify-between gap-[30px]">
        <Image
          className="w-[50%]"
          alt="this is contact image"
          width={400}
          height={400}
          src={"/contact.png"}
        />
        <form className="flex w-[50%] flex-col gap-[30px]">
          <input
            placeholder="Name"
            type="text"
            className="rounded-[20px] border-[3px] border-solid bg-transparent p-[10px] text-[25px] text-white transition-all focus:border-[#6d717a] focus:outline-none"
          />
          <input
            placeholder="Email"
            type="email"
            className="rounded-[20px] border-[3px] border-solid bg-transparent p-[10px] text-[25px] text-white transition-all focus:border-[#6d717a] focus:outline-none"
          />
          <textarea
            rows={5}
            className="resize-none rounded-[20px] border-[3px] border-solid bg-transparent p-[10px] text-[25px] text-white transition-all focus:border-[#6d717a] focus:outline-none"
          ></textarea>
          <input
            type="submit"
            className="self-start rounded-[20px] bg-[#53C38B] px-[40px] py-[15px] text-[20px] text-white"
          />
        </form>
      </div>
    </div>
  );
}
