import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function BreadCrumb() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                <BreadcrumbSeparator />
                <BreadcrumbItem>Preferências</BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}