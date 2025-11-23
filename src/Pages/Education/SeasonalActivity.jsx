import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function SeasonalActivity() {
  const data = [
    { month: "Jan", sightings: 5 },
    { month: "Feb", sightings: 8 },
    { month: "Mar", sightings: 12 },
    { month: "Apr", sightings: 20 },
    { month: "May", sightings: 35 },
    { month: "Jun", sightings: 50 },
    { month: "Jul", sightings: 55 },
    { month: "Aug", sightings: 48 },
    { month: "Sep", sightings: 30 },
    { month: "Oct", sightings: 18 },
    { month: "Nov", sightings: 10 },
    { month: "Dec", sightings: 6 },
  ];

  return (
    <div style={styles.container}>
      <h1>Seasonal Tick Activity</h1>

      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        style={{ background: "#fff", borderRadius: "10px", padding: "20px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sightings" stroke="#8884d8" strokeWidth={3} />
      </LineChart>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
};
