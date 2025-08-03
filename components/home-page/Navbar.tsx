import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
    return (
        <div className="relative bg-sidebar px-5 h-16 border-b shadow">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div  className="flex items-center gap-x-4">
                    <SidebarTrigger />
                    <Link href="#">
                        <img src="/logo.svg" alt="StockAtlas" className="w-auto h-7" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;