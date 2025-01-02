import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Configuration globale de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BudgetCurve = () => {
  // Données du graphique
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], // Mois ou périodes
    datasets: [
      {
        label: "Revenus (€)",
        data: [12000, 15000, 13000, 17000, 20000, 18000, 22000, 25000, 23000],
        borderColor: "rgba(75, 192, 192, 1)", // Couleur de la courbe
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Zone sous la courbe
        tension: 0.4, // Courbure des lignes
        pointRadius: 5, // Taille des points
      },
      {
        label: "Dépenses (€)",
        data: [10000, 14000, 12000, 16000, 18000, 17000, 19000, 24000, 21000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  // Options de configuration
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position de la légende
      },
      title: {
        display: true,
        text: "Courbes de charge (Budget)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Montant (€)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Périodes",
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default BudgetCurve;
