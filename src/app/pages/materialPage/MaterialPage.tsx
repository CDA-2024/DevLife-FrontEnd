import { useState } from "react";
import GridComponent from "../../shared/components/GridComponent/GridComponent";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../shared/components/Shadcn/ui/card";
import { Button } from "../../shared/components/Shadcn/ui/button";
import { useGetMaterial } from "./hooks/useMaterialApi";
import { useGetOneMaterialSkill } from "./hooks/useMaterialSkillApi";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "../../shared/components/Shadcn/ui/alert-dialog";

export const MaterialScreen = () => {
  const { data: materials, loading, error } = useGetMaterial({ field: "name" });

  if (loading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Liste des Matériels
      </h1>
      <GridComponent
        cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        gap="gap-6"
      >
        {materials.map((material) => (
          <MaterialCard
            key={material.id}
            material={{
              id: material.id,
              idMaterialSkill: material.id_material_skill,
              name: material.name,
              type: material.type,
              description: material.description,
              image_url: material.image_url,
            }}
          />
        ))}
      </GridComponent>
    </div>
  );
};

interface MaterialProps {
  material: {
    id: number;
    idMaterialSkill: number;
    name: string;
    type: string;
    description: string;
    image_url: string;
  };
}

const MaterialCard = ({ material }: MaterialProps) => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="overflow-hidden max-w-xs cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <CardHeader className="p-0">
          <img
            src={material.image_url}
            alt={material.name}
            className="w-full h-48 object-cover"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-center p-3">{material.name}</CardTitle>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCount(count - 1);
            }}
            disabled={count === 0}
          >
            -
          </Button>
          <span className="text-lg font-bold">{count}</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCount(count + 1);
            }}
          >
            +
          </Button>
        </CardFooter>
      </Card>

      {isModalOpen && (
        <MaterialSkillModal
          material={material}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

interface MaterialSkillModalProps {
  material: MaterialProps["material"];
  onClose: () => void;
}

const MaterialSkillModal = ({ material, onClose }: MaterialSkillModalProps) => {
  const {
    data: materialSkill,
    loading,
    error,
  } = useGetOneMaterialSkill({
    id: material.idMaterialSkill,
  });

  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogTitle>
          <h2 className="text-xl font-bold">{material.name}</h2>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <p className="mb-4">{material.description}</p>
          <div>
            <h3 className="text-lg font-semibold">
              Détails de la compétence associée :
            </h3>
            {loading && <p>Chargement de la compétence...</p>}
            {error && <p>Erreur lors du chargement de la compétence.</p>}
            {materialSkill && (
              <div className="mt-2">
                <p>
                  <strong>Description : </strong> {materialSkill.name}
                </p>
              </div>
            )}
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <Button onClick={onClose}>Fermer</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
