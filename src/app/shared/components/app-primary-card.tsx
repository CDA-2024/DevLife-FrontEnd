import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export type CardItemType = {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

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
