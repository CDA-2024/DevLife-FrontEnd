import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { CardItemType } from "../interfaces/PrimaryCard.interface";

type Props = {
  CardItem: CardItemType;
};

const PrimaryCard = ({ CardItem }: Props) => {
  return (
    <>
      <Card>
        <CardHeader>{CardItem?.header || ""}</CardHeader>
        <CardContent>{CardItem?.content || ""}</CardContent>
        <CardFooter>{CardItem?.footer || ""}</CardFooter>
      </Card>
    </>
  );
};

export default PrimaryCard;
