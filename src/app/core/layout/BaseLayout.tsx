import { SidebarInset } from "../../shared/components/ui/sidebar";

import { AppSidebar } from "../../shared/components/app-sidebar";
import { SidebarProvider } from "../../shared/components/ui/sidebar";
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
        <main className="">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
export default BaseLayout;
