import { SidebarInset } from "../../shared/components/shadcn/ui/sidebar";

import { AppSidebar } from "../../shared/components/shadcn/app-sidebar";
import { SidebarProvider } from "../../shared/components/shadcn/ui/sidebar";
import Header from "./Header/Header";
import { Toaster } from "../../shared/components/shadcn/ui/toaster";
type Props = {
  children: React.ReactNode;
};
function BaseLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
export default BaseLayout;
