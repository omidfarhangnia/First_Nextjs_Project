export default async function Category({ params }) {
  const { category } = await params;
  return (
    <div>
      <div className="pl-[50px] text-[40px]">{category}</div>
    </div>
  );
}
