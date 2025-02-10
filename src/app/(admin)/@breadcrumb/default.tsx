import { Breadcrumb, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

export default function DefaultBreadCrumb() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                {/* <BreadcrumbSeparator /> */}
            </BreadcrumbList>
        </Breadcrumb>
    )
}