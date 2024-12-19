import { SidebarInset } from "../components/ui/sidebar"

import { AppSidebar } from "../components/app-sidebar"
import { SidebarProvider } from "../components/ui/sidebar"
import Header from "./Header/Header"

type Props = {
    children: React.ReactNode
}
function BaseLayout({ children }: Props) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <main className="">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
export default BaseLayout