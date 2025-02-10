import { auth } from "@/auth";
import { Header } from "@/components/header";
import { AppSidebar } from "@/components/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

export default async function Layout({
  children, breadcrumb
}: Readonly<{
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
}>) {

  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <SidebarProvider>
      <AppSidebar user={session.user} />
      <SidebarInset>

        <div className="h-screen pt-16 w-full bg-gray-50">
          <Header user={session.user} breadcrumb={breadcrumb} />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}