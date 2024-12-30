import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { Staff } from "../interfaces/Staff.interface";
import StaffCard from "./StaffCard";


import { useEffect, useState } from "react";

const StaffRecrutementSection = () => {
  const [datas, setDatas] = useState<Staff[]>([])

  useEffect(() =>{

    const url = "http://localhost:3000/staffToHire"

    const fetchData = async () => {
      try{
        const response = await fetch(url);

        if(!response){
          throw new Error("oups !")
        }

        const result = await response.json();
        console.log(result)
        setDatas(result);

      } catch (e) {
       console.log(e.message)
      }
    };

    fetchData();
    
  }, [])

  return (
    <>
      <GridComponent
        cols="grid-cols-1 sm:grid-cols-1 md:grid-cols-1"
        gap="gap-6"
      >
        {
          datas.map((data, index) => (
            <StaffCard key={index} staff={data} />
          ))
        }
      </GridComponent>
    </>
  );
};

export default StaffRecrutementSection;
