import { ReactNode } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTitle } from "../Shadcn/ui/alert-dialog";


interface ReusableAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

const ReusableAlertDialog = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
}: ReusableAlertDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        {title && (
          <AlertDialogTitle>
            {title}
          </AlertDialogTitle>
        )}
        {description && (
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        )}
        {children}
        {footer && (
          <AlertDialogFooter>
            {footer}
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ReusableAlertDialog;
