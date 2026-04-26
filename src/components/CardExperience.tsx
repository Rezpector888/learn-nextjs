export default function CardExperience({
  item,
  align,
}: {
  item: { title: string; company: string; date: string; description: string };
  align: "left" | "right";
}) {
  return (
    <div
      className={`
        bg-[#0f172a]/80 backdrop-blur-md 
        border border-blue-500/20
        p-5 rounded-xl 
        shadow-[0_0_25px_rgba(59,130,246,0.15)]
        hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(96,165,250,0.4)]
        transition duration-300
      `}
    >
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="text-sm text-blue-300">
        {item.company} • {item.date}
      </p>
      <p className="text-gray-300 mt-2">{item.description}</p>
    </div>
  );
}
