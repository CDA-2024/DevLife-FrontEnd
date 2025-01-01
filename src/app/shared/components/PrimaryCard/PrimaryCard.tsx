import { ReactChildren } from "../../interfaces/ReactChildren.interface";
import { Card } from "../ui/card";

const PrimaryCard = ({ children }: ReactChildren) => {
  return (
    <>
      <Card className="shadow-sm overflow-hidden flex-1 w-full">
        {children}
      </Card>
    </>
  );
};

export default PrimaryCard;
