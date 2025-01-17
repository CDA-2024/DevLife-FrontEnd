import { ReactChildren } from "../../interfaces/ReactChildren.interface";
import { CardContent } from "../Shadcn/ui/card";

const PrimaryCardContent = ({ children }: ReactChildren) => {
  return <CardContent>{children}</CardContent>;
};

export default PrimaryCardContent;
