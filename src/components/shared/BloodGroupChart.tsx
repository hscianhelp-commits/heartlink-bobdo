const bloodGroups = [
  { group: "A+", canGive: "A+, AB+", canReceive: "A+, A-, O+, O-" },
  { group: "A-", canGive: "A+, A-, AB+, AB-", canReceive: "A-, O-" },
  { group: "B+", canGive: "B+, AB+", canReceive: "B+, B-, O+, O-" },
  { group: "B-", canGive: "B+, B-, AB+, AB-", canReceive: "B-, O-" },
  { group: "AB+", canGive: "AB+", canReceive: "সকল গ্রুপ" },
  { group: "AB-", canGive: "AB+, AB-", canReceive: "A-, B-, AB-, O-" },
  { group: "O+", canGive: "A+, B+, AB+, O+", canReceive: "O+, O-" },
  { group: "O-", canGive: "সকল গ্রুপ", canReceive: "O-" },
];

const BloodGroupChart = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 px-4 py-3 border-b border-gray-100">
        <span className="text-sm font-semibold text-foreground">গ্রুপ</span>
        <span className="text-sm font-semibold text-foreground">দিতে পারে</span>
        <span className="text-sm font-semibold text-foreground">নিতে পারে</span>
      </div>

      {/* Rows */}
      {bloodGroups.map((item, index) => (
        <div
          key={item.group}
          className={`grid grid-cols-3 gap-4 px-4 py-3 ${
            index !== bloodGroups.length - 1 ? "border-b border-gray-50" : ""
          }`}
        >
          <span className="text-base font-bold text-primary">{item.group}</span>
          <span className="text-sm text-muted-foreground">{item.canGive}</span>
          <span className="text-sm text-muted-foreground">{item.canReceive}</span>
        </div>
      ))}
    </div>
  );
};

export default BloodGroupChart;