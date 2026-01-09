import { ArrowRight, ArrowLeft, Droplets } from "lucide-react";

const bloodGroups = [
  { group: "A+", canGive: ["A+", "AB+"], canReceive: ["A+", "A-", "O+", "O-"] },
  { group: "A-", canGive: ["A+", "A-", "AB+", "AB-"], canReceive: ["A-", "O-"] },
  { group: "B+", canGive: ["B+", "AB+"], canReceive: ["B+", "B-", "O+", "O-"] },
  { group: "B-", canGive: ["B+", "B-", "AB+", "AB-"], canReceive: ["B-", "O-"] },
  { group: "AB+", canGive: ["AB+"], canReceive: ["সকল গ্রুপ"], isUniversalReceiver: true },
  { group: "AB-", canGive: ["AB+", "AB-"], canReceive: ["A-", "B-", "AB-", "O-"] },
  { group: "O+", canGive: ["A+", "B+", "AB+", "O+"], canReceive: ["O+", "O-"] },
  { group: "O-", canGive: ["সকল গ্রুপ"], canReceive: ["O-"], isUniversalDonor: true },
];

const BloodGroupChart = () => {
  return (
    <div className="space-y-3">
      {/* Legend */}
      <div className="flex gap-4 justify-center mb-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-muted-foreground">দিতে পারে</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-muted-foreground">নিতে পারে</span>
        </div>
      </div>

      {bloodGroups.map((item) => (
        <div
          key={item.group}
          className="bg-muted rounded-2xl p-4 relative overflow-hidden"
        >
          {/* Special badges */}
          {item.isUniversalDonor && (
            <span className="absolute top-2 right-2 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-medium">
              সার্বজনীন দাতা
            </span>
          )}
          {item.isUniversalReceiver && (
            <span className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-medium">
              সার্বজনীন গ্রহীতা
            </span>
          )}

          <div className="flex items-center gap-4">
            {/* Blood Group Badge */}
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
              <div className="text-center">
                <Droplets className="w-4 h-4 text-white/80 mx-auto mb-0.5" />
                <span className="text-white font-bold text-lg">{item.group}</span>
              </div>
            </div>

            {/* Compatibility Info */}
            <div className="flex-1 space-y-2">
              {/* Can Give */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 min-w-[70px]">
                  <ArrowRight className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600 font-medium">দিতে পারে</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.canGive.map((group, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>

              {/* Can Receive */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 min-w-[70px]">
                  <ArrowLeft className="w-4 h-4 text-blue-500" />
                  <span className="text-xs text-blue-600 font-medium">নিতে পারে</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.canReceive.map((group, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Info Note */}
      <div className="bg-amber-50 rounded-xl p-3 flex gap-2 mt-4">
        <Droplets className="w-5 h-5 text-amber-600 flex-shrink-0" />
        <p className="text-xs text-amber-700">
          <span className="font-bold">O-</span> গ্রুপ সকলকে রক্ত দিতে পারে এবং{" "}
          <span className="font-bold">AB+</span> গ্রুপ সকলের কাছ থেকে রক্ত নিতে পারে।
        </p>
      </div>
    </div>
  );
};

export default BloodGroupChart;