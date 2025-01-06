import { Line } from "react-chartjs-2";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shared/components/Shadcn/ui/card";
import ExpensesPieChart from "./ExpensesChart";

const chargesData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Salaires",
      data: [
        5000, 5200, 5300, 5500, 5600, 5800, 6000, 6100, 6200, 6300, 6400, 6500,
      ],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
    {
      label: "Infrastructure",
      data: [
        2000, 2100, 2000, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700,
      ],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.4,
    },
    {
      label: "Outils",
      data: [
        1000, 900, 1100, 950, 1050, 1020, 1150, 1120, 1080, 1100, 1200, 1300,
      ],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const, // Correction ici
    },
  },
};

const BudgetPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">Budget & Charges</h1>

      {/* Résumé du Budget */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Revenus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-500 text-3xl font-bold">€100,000</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Dépenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500 text-3xl font-bold">€50,000</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Bénéfices Nets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-500 text-3xl font-bold">€50,000</p>
          </CardContent>
        </Card>
      </div>

      {/* Graphiques */}
      <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {/* Évolution des Charges */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Évolution des Charges</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={chargesData} options={options} />
          </CardContent>
        </Card>

        <ExpensesPieChart />
      </div>
    </div>
  );
};

export default BudgetPage;
