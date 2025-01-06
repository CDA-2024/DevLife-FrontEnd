import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { EmployeToHire } from "../interfaces/EmployeToHire.interface";
import EmployeToHireCard from "./EmployeToHireCard";

import { useEffect, useState } from "react";

const EmployeRecrutementSection = () => {
  const [datas, setDatas] = useState<EmployeToHire[]>([]);

  useEffect(() => {
    const url = "http://localhost:3000/staffToHire";

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response) {
          throw new Error("oups !");
        }

        const result = await response.json();
        console.log(result);
        setDatas(result);
      } catch (e) {
        console.log("Une erreur inattendue est survenue", e);
      }
    };

    fetchData();
  }, []);

  return (
    <GridComponent
      cols="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      gap="gap-6 w-full"
    >
      {datas.map((data) => (
        <EmployeToHireCard key={data.id} employe={data} />
      ))}
    </GridComponent>
  );
};

export default EmployeRecrutementSection;
