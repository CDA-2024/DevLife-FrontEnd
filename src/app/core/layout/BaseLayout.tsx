import { SidebarInset } from "../../shared/components/Shadcn/ui/sidebar";

import { AppSidebar } from "../../shared/components/Shadcn/app-sidebar";
import { SidebarProvider } from "../../shared/components/Shadcn/ui/sidebar";
import Header from "./Header/Header";
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
      </SidebarInset>
    </SidebarProvider>
  );
}
export default BaseLayout;
