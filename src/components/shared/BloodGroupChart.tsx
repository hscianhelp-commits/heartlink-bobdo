const bloodGroups = [
  { group: "A+", canGive: "A+, AB+", canReceive: "A+, A-, O+, O-", color: "bg-red-500" },
  { group: "A-", canGive: "A+, A-, AB+, AB-", canReceive: "A-, O-", color: "bg-rose-500" },
  { group: "B+", canGive: "B+, AB+", canReceive: "B+, B-, O+, O-", color: "bg-blue-500" },
  { group: "B-", canGive: "B+, B-, AB+, AB-", canReceive: "B-, O-", color: "bg-indigo-500" },
  { group: "AB+", canGive: "AB+", canReceive: "সকল গ্রুপ", color: "bg-purple-500" },
  { group: "AB-", canGive: "AB+, AB-", canReceive: "A-, B-, AB-, O-", color: "bg-violet-500" },
  { group: "O+", canGive: "A+, B+, AB+, O+", canReceive: "O+, O-", color: "bg-green-500" },
  { group: "O-", canGive: "সকল গ্রুপ", canReceive: "O-", color: "bg-emerald-600" },
];

const BloodGroupChart = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="grid grid-cols-3 gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <span className="text-sm font-bold text-foreground">গ্রুপ</span>
        <span className="text-sm font-bold text-foreground">দিতে পারে</span>
        <span className="text-sm font-bold text-foreground">নিতে পারে</span>
      </div>

      {/* Rows */}
      {bloodGroups.map((item, index) => (
        <div
          key={item.group}
          className={`grid grid-cols-3 gap-2 px-4 py-3 items-center ${
            index !== bloodGroups.length - 1 ? "border-b border-gray-100" : ""
          } ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
        >
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>
              {item.group}
            </span>
          </div>
          <span className="text-sm text-foreground">{item.canGive}</span>
          <span className="text-sm text-foreground">{item.canReceive}</span>
        </div>
      ))}
    </div>
  );
};

export default BloodGroupChart;