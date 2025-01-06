import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/components/Shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shared/components/Shadcn/ui/card";

const BusinessScreenFreelance = () => {
  const navigate = useNavigate();
  return (
    // Conteneur principal
    <div className="p-6 bg-white min-h-screen">
      {/* grille principale 5 colones */}
      <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-1 ">
        <Card className="md:col-span-4 sm:col-span-1 border border-grey-200 shadow-lg  ">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold text-grey-700">
              Créer une société
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="text-green-500 text-2xl font-bold text-center">
                50,000 €{" "}
              </div>
              <div className="text-gray-600 text-center">
                Nombre de bureaux : <span className="font-medium">10/1000</span>
              </div>
              <div className="flex flex-row justify-center gap-4">
                <Button
                  size="sm"
                  className="bg-blue-500 text-white p-1 w-8 h-8 text-sm rounded-md"
                >
                  +
                </Button>
                <Button
                  size="sm"
                  className="bg-red-500 text-white p-1 w-8 h-8 text-sm rounded-md"
                >
                  -
                </Button>
              </div>
              <div className="text-center">
                <Button
                  className="w-32 h-10 text-sm px-4 py-2 rounded-lg bg-green-500 text-white"
                  onClick={() => navigate("/shop")}
                >
                  Créer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="md:col-span-1 sm:col-span-1 gap-4 grid grid-rows-3 border border-gray-200 shadow-lg p-4 bg-white rounded-lg">
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
      </div>
    </div>
  );
};

export default BusinessScreenFreelance;
