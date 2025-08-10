import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface DailySkeletonProps {
    Icon: React.ElementType
    type: "daily_gainers" | "daily_losers" | "daily_active" | "daily_shorted"
}

const DailySkeleton = ({ Icon, type }: DailySkeletonProps) => {
    const getTitle = (type: string) => {
        if(type === "daily_gainers") {
            return ( <span>Top <span className=" font-bold text-up">Gainers</span> Today</span> )
        }
        if(type === "daily_losers") {
            return ( <span>Top <span className=" font-bold text-down">Losers</span> Today</span> )
        }
        if(type === "daily_active") {
            return ( <span>Most <span className=" font-bol">Active</span> Today</span> )
        }
        if(type === "daily_shorted") {
            return ( <span>Most <span className=" font-bol">Shorted</span> Today</span>)
        }
    }

    return (
        <div className="highlight-block">
            <div className="highlight-header">
                <h3 className="inline-flex gap-x-2 items-center">
                    <Icon className=" !stroke-2"/>
                    {getTitle(type)}
                </h3>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-1/6"><Skeleton className="h-8 mb-2 w-full" /></TableHead>
                        <TableHead className="w-1/2"><Skeleton className="h-8 mb-2 w-full" /></TableHead>
                        <TableHead className="w-1/6"><Skeleton className="h-8 mb-2 w-full" /></TableHead>
                        <TableHead className="w-1/6"><Skeleton className="h-8 mb-2 w-full" /></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={`skele-loser-${i}`}>
                            <TableCell className="w-1/6"><Skeleton className="h-[51px] " /></TableCell>
                            <TableCell className="w-1/2"><Skeleton className="h-[51px]" /></TableCell>
                            <TableCell className="w-1/6"><Skeleton className="h-[51px]" /></TableCell>
                            <TableCell className="w-1/6"><Skeleton className="h-[51px]" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default DailySkeleton;