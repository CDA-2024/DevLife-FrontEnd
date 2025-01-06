import { ReactChildren } from "../../interfaces/ReactChildren.interface";
import { CardFooter } from "../Shadcn/ui/card";

const PrimaryCardFooter = ({ children }: ReactChildren) => {
  return <CardFooter>{children}</CardFooter>;
};

export default PrimaryCardFooter;
