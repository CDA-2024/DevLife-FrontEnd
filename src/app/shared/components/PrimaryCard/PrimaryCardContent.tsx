import { ReactChildren } from "../../interfaces/ReactChildren.interface";
import { CardContent } from "../Shadcn/ui/card";

const PrimaryCardFooter = ({ children }: ReactChildren) => {
  return (
    <>
      <CardContent>{children}</CardContent>
    </>
  );
};

export default PrimaryCardFooter;
