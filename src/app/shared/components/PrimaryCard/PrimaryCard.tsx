import { ReactChildren } from "../../interfaces/ReactChildren.interface";
import { Card } from "../ui/card";

const PrimaryCard = ({ children }: ReactChildren) => {
  return (
    <>
      <Card className="shadow-sm overflow-hidden max-w-xs min-w-[500px]">
        {children}
      </Card>
    </>
  );
};

export default PrimaryCard;
