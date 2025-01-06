import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shared/components/Shadcn/ui/card";

// Configuration globale de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesPieChart: React.FC = () => {
  const data = {
    labels: ["Salaires", "Infrastructure", "Outils", "Marketing", "Divers"],
    datasets: [
      {
        label: "Répartition des Dépenses (€)",
        data: [6500, 2700, 1300, 800, 500],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<"pie">) {
            return `${tooltipItem.label}: ${tooltipItem.raw}€`;
          },
        },
      },
    },
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Répartition des Dépenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <Pie data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpensesPieChart;
