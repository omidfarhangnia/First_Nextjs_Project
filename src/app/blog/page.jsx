import Link from "next/link";

export default async function Blog() {
  const data = await getData();

  return (
    <div className="my-[100px] flex w-full flex-col gap-[30px] p-[20px]">
      {data.map((member) => {
        return (
          <div key={member.id} className="flex items-center justify-around">
            <div className="h-[40px] w-[30%] rounded-full bg-blue-500"></div>
            <h4
              className="w-[30%] truncate text-[45px] uppercase"
              key={member.id}
            >
              <Link href={`/blog/${member.id}`}>{member.title}</Link>
            </h4>
          </div>
        );
      })}
    </div>
  );
}

async function getData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=20",
  );
  const data = await res.json();

  if (!data) return <h1>hello there</h1>;

  return data;
}
