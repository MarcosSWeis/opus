import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import CSS from "./dashboard.module.css";
import { useMemo } from "react";
import { Bar } from "react-chartjs-2"; // para graficos de barras
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const options = {
  // el grafico ocupa toda la pantalla , pro cuando se achica la acompaña en tamaño
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Cantidad de habitantes por piso",
    },
  },
  type: "bar",
};
export default function GraphicBarChartsFloors({ barChartData }) {
  const data = useMemo(function () {
    return {
      //estructura de como lo pide react chart
      datasets: [
        {
          label: "Pisos",
          data: barChartData.map((hxFloor) => hxFloor.habitantsfloor),
          //para cambiar los colores de las linear
          borderColor: "#001021",
          //pinta de algun color el area bajo la curva
          backgroundColor: "#F9626C",
        },
      ],
      labels: barChartData.map((hxFloor) => hxFloor.floor),
      options: {
        indexAxis: "y",
      },
    };
  }, []);

  return <Bar data={data} options={options} />;
}
