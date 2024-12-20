import { SidebarInset } from "../../shared/components/ui/sidebar";

import { AppSidebar } from "../../shared/components/app-sidebar";
import { SidebarProvider } from "../../shared/components/ui/sidebar";
import Header from "./Header/Header";
import { Toaster } from "../../shared/components/ui/toaster";
type Props = {
  children: React.ReactNode;
};
function BaseLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="">{children}</main>
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
export default BaseLayout;
