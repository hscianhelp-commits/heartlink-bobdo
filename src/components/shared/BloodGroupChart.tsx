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
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Horizontal Scroll Wrapper */}
      <div className="overflow-x-auto">
        <div className="min-w-[450px]"> {/* নিশ্চিত করে যে ছোট স্ক্রিনেও কলামগুলো চ্যাপ্টা হবে না */}
          
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
            <span className="text-sm font-bold text-gray-700">গ্রুপ</span>
            <span className="text-sm font-bold text-gray-700">দিতে পারে</span>
            <span className="text-sm font-bold text-gray-700">নিতে পারে</span>
          </div>

          {/* Rows */}
          {bloodGroups.map((item, index) => (
            <div
              key={item.group}
              className={`grid grid-cols-3 gap-4 px-6 py-4 items-center whitespace-nowrap ${
                index !== bloodGroups.length - 1 ? "border-b border-gray-100" : ""
              } ${index % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}
            >
              <div className="flex items-center">
                <span className="w-10 h-10 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center shadow-sm">
                  {item.group}
                </span>
              </div>
              <span className="text-sm text-gray-600 font-medium">{item.canGive}</span>
              <span className="text-sm text-gray-600 font-medium">{item.canReceive}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Hint - Only visible on small screens */}
      <div className="md:hidden text-center py-2 bg-gray-50 text-[10px] text-gray-400 border-t border-gray-100">
        পুরোটা দেখতে ডানে স্ক্রল করুন ↔
      </div>
    </div>
  );
};

export default BloodGroupChart;
