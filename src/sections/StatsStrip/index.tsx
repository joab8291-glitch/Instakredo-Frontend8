export const StatsStrip = () => {
  const stats = [
    { num: "2.5%", label: "Discount on every order" },
    { num: "3", label: "Networks supported" },
    { num: "<2min", label: "Average delivery" },
    { num: "24/7", label: "WhatsApp support" },
  ];

  return (
    <div className="flex flex-wrap border-y border-green-700/15 bg-white">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex-1 min-w-[140px] text-center px-4 py-7 ${
            i !== stats.length - 1 ? "border-r border-green-700/15" : ""
          }`}
        >
          <span className="font-poppins text-3xl font-extrabold text-green-700 block">
            {stat.num}
          </span>
          <div className="text-xs text-stone-500 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
