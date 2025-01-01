import { ReactChildren } from "../../interfaces/ReactChildren.interface";
import { CardHeader } from "../shadcn/ui/card";

const PrimaryCardHeader = ({ children }: ReactChildren) => {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between">
        {children}
      </CardHeader>
    </>
  );
};

export default PrimaryCardHeader;
