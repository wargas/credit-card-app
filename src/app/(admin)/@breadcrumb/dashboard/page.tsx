import { Breadcrumb, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

export default function BreadCrumb() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbList>
        </Breadcrumb>
    )
}