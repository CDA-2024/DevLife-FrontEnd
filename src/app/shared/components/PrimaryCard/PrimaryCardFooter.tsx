import { ReactChildren } from "../../interfaces/ReactChildren.interface";
import { CardFooter } from "../ui/card";

const PrimaryCardContent = ({ children }: ReactChildren) => {
  return (
    <>
      <CardFooter>{children}</CardFooter>
    </>
  );
};

export default PrimaryCardContent;
