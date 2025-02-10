import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
    return <div className="p-4 flex flex-col gap-4">
        <Skeleton className="w-full h-8  rounded-xl" />
        <Skeleton className="w-[50%] h-4  rounded-xl" />
        <div className="grid grid-cols-4 gap-4">
            <Skeleton className="w-full h-[150px]  rounded-xl" />
            <Skeleton className="w-full h-[150px]  rounded-xl" />
            <Skeleton className="w-full h-[150px]  rounded-xl" />
            <Skeleton className="w-full h-[150px]  rounded-xl" /> 
        </div>
        <Skeleton className="w-full h-8  rounded-xl" />
        <Skeleton className="w-[50%] h-4  rounded-xl" />
        <div className="grid grid-cols-2 gap-4">
            <Skeleton className="w-full h-[150px]  rounded-xl" />
            <Skeleton className="w-full h-[150px]  rounded-xl" />
        </div>
    </div>
}