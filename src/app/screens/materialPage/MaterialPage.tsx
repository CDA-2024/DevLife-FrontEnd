import { useState } from "react";
import GridComponent from "../../shared/components/GridComponent/GridComponent";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../shared/components/ui/card";
import { Button } from "../../shared/components/ui/button";
import Ordinateur from "../../../assets/images/ordinateur.png";
import Bureau from "../../../assets/images/bureau.jpg";
import Chaise from "../../../assets/images/chaiseBureau.jpg";
import Ecran from "../../../assets/images/ecranPc.png";

const materials = [
  { id: 1, name: "Ordinateur", image: Ordinateur },
  { id: 2, name: "Bureau", image: Bureau },
  { id: 3, name: "Chaise", image: Chaise },
  { id: 4, name: "Ecran", image: Ecran },
];

export const MaterialScreen = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Liste des Matériels</h1>
      <GridComponent
        cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        gap="gap-6"
        className="p-20"
      >
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </GridComponent>
    </div>
  );
};

const MaterialCard = ({
  material,
}: {
  material: { id: number; name: string; image: string };
}) => {
  const [count, setCount] = useState(0);

  return (
    <Card className="overflow-hidden max-w-xs">
      <CardHeader className="p-0">
        <img
          src={material.image}
          alt={material.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>

      <CardContent>
        <CardTitle className="text-center p-3">{material.name}</CardTitle>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Button onClick={() => setCount(count - 1)} disabled={count === 0}>
          -
        </Button>
        <span className="text-lg font-bold">{count}</span>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </CardFooter>
    </Card>
  );
};
