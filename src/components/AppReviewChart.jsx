import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const AppReviewChart = ({ ratings }) => {
  if (!ratings) return null;

  const data = [...ratings]
    .sort((a, b) => parseInt(b.name) - parseInt(a.name))
    .map((item) => ({
      name: item.name,
      value: item.count,
    }));

  return (
    <div className="mt-10 p-6 rounded-lg">
      {/* <h2 className="text-xl font-semibold text-black mb-4">Ratings</h2> */}

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
          >
            {/* X = values */}
            <XAxis type="number" axisLine={false} tickLine={false} />

            {/* Y = labels */}
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false} // remove little ticks
              tick={{ dx: -10 }}
              width={60}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
              }}
              itemStyle={{ color: "#000" }} // makes text black
              labelStyle={{ color: "#000" }} // label (e.g. "5 star")
            />

            {/* Bars */}
            <Bar
              dataKey="value"
              fill="#f28c28"
              radius={[4, 4, 4, 4]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppReviewChart;
