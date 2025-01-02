import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shared/components/ui/card";
import BudgetCurve from "./BudgetCurve";

interface Enterprise {
  name: string;
  level: number;
  employees: number;
  revenue: number;
}

interface TeamMember {
  name: string;
  role: string;
  level: number;
}

const enterprise: Enterprise = {
  name: "DevStudio Pro",
  level: 3,
  employees: 5,
  revenue: 25000,
};

const team: TeamMember[] = [
  { name: "Fatal.xxl", role: "Full-Stack", level: 12 },
  { name: "CodeMaster", role: "Front-End", level: 8 },
  { name: "DataWizard", role: "Back-End", level: 10 },
];

const BusinessScreenCompany = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col justify-center sm:flex-row gap-4 col-span-2">
        <Button size="sm" className="bg-yellow-500 text-white">
          Modifier
        </Button>
        <Button size="sm" className="bg-red-500 text-white">
          Dissoudre
        </Button>
        <Button size="sm" className="bg-gray-500 text-white">
          Quitter
        </Button>
      </div>

      {/* Section "Mon Entreprise" */}
      <Card className="lg:col-span-1 border-gray-200 shadow-md rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-gray-800">Mon Entreprise</CardTitle>
          <Button variant="outline" size="sm">
            Gérer →
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-gray-600">
                Nom :{" "}
                <span className="text-gray-800 font-medium">
                  {enterprise.name}
                </span>
              </p>
              <p className="text-gray-600">
                Niveau :{" "}
                <span className="text-amber-600 font-medium">
                  {enterprise.level}
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                Employés :{" "}
                <span className="text-gray-800 font-medium">
                  {enterprise.employees}
                </span>
              </p>
              <p className="text-gray-600">
                Revenus :{" "}
                <span className="text-emerald-600 font-medium">
                  {enterprise.revenue.toLocaleString()}€
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section "Budget Entreprise" */}
      <div className="lg:col-span-1 bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Budget Entreprise
        </h1>
        <BudgetCurve />
      </div>

      {/* Section "Mon Équipe" */}
      <Card className="col-span-2 lg:col-span-2 border-gray-200 shadow-md rounded-lg">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-gray-800">Mon Équipe</CardTitle>
          <Button
            variant="outline"
            onClick={() => navigate("/staff")}
            size="sm"
          >
            Gérer →
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex justify-between items-center p-3 border rounded-lg bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">👤</span>
                  <div>
                    <p className="font-medium text-gray-800">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
                <span className="text-amber-600 font-medium">
                  Niv. {member.level}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessScreenCompany;
