import { useEffect, useState } from "react";
import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import EmployeCard from "./EmployeCard";
import { Employe } from "../interfaces/Employe.interface";

const EmployeManagementSection = () => {
  const [datas, setDatas] = useState<Employe[]>([]);

  useEffect(() => {
    const url = "http://localhost:3000/staff";

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
        <EmployeCard key={data.id} employe={data} />
      ))}
    </GridComponent>
  );
};

export default EmployeManagementSection;
