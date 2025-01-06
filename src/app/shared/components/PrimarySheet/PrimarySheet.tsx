import { ReactNode } from "react";
import { Button } from "../../../shared/components/Shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../shared/components/Shadcn/ui/sheet";

interface PrimarySheetProps {
  btnTitle: string;
  title: string;
  description: string;
  children: ReactNode;
}

const PrimarySheet = ({
  btnTitle,
  title,
  description,
  children,
}: PrimarySheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">{btnTitle}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default PrimarySheet;
