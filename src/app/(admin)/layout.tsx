import { auth } from "@/auth";
import { Header } from "@/components/header";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

    return (
      <div>
        <Header user={session.user} />
        {children}
      </div>
    )
  }