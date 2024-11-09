export default async function BlogPost({ params: { id } }) {
  const data = await getTheBlog(id);
  return (
    <div>
      <h2 className="relative mb-[30px] text-[30px] capitalize">
        {data.title}

        <span className="absolute right-0 top-[-50px] rounded-[30px] bg-blue-500 p-[15px] text-black">
          {data.id}
        </span>
      </h2>
      <p className="text-[20px]">{data.body}</p>
    </div>
  );
}

async function getTheBlog(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
}
