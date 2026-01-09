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
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm max-w-full">
      {/* Header */}
      <div className="grid grid-cols-[60px_1fr_1fr] gap-1 px-2 py-2 bg-gray-50 border-b border-gray-200">
        <span className="text-[11px] font-bold text-gray-600 uppercase">গ্রুপ</span>
        <span className="text-[11px] font-bold text-gray-600 uppercase">দিতে পারে</span>
        <span className="text-[11px] font-bold text-gray-600 uppercase">নিতে পারে</span>
      </div>

      {/* Rows */}
      {bloodGroups.map((item, index) => (
        <div
          key={item.group}
          className={`grid grid-cols-[60px_1fr_1fr] gap-1 px-2 py-2 items-center ${
            index !== bloodGroups.length - 1 ? "border-b border-gray-100" : ""
          } ${index % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}
        >
          {/* Blood Group Circle - Smaller size */}
          <div className="flex items-center">
            <span className="w-7 h-7 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
              {item.group}
            </span>
          </div>

          {/* Data Columns with nowrap to prevent line breaks */}
          <span className="text-[10px] sm:text-xs text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">
            {item.canGive}
          </span>
          <span className="text-[10px] sm:text-xs text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">
            {item.canReceive}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BloodGroupChart;
