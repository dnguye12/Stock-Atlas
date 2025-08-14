import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SiDiscord} from "@icons-pack/react-simple-icons"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-sidebar">
            <Separator />
            <div className="container mx-auto px-4 md:px-10 py-4 md:py-8">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                        <div className="flex items-center gap-2 lg:justify-start">
                            <Link href={"/"}></Link>
                            <img src="/logo.svg" alt="logo" className="h-8" />
                        </div>
                        <p className="text-muted-foreground max-w-[70%] text-sm">A collection of components for your startup business or side project.</p>
                        <ul className="text-muted-foreground flex items-center space-x-4">
                            <li className="hover:text-primary font-medium">
                                <Button size={"icon"} variant={"outline"} asChild>
                                    <a href="">
                                        <SiDiscord size={20} color="#737373"/>
                                    </a>
                                </Button>
                            </li>
                            <li className="hover:text-primary font-medium">
                                <Button size={"icon"} variant={"outline"} asChild>
                                    <a href="">
                                        <SiDiscord size={20} color="#737373"/>
                                    </a>
                                </Button>
                            </li>
                            <li className="hover:text-primary font-medium">
                                <Button size={"icon"} variant={"outline"} asChild>
                                    <a href="">
                                        <SiDiscord size={20} color="#737373"/>
                                    </a>
                                </Button>
                            </li>
                            <li className="hover:text-primary font-medium">
                                <Button size={"icon"} variant={"outline"} asChild>
                                    <a href="">
                                        <SiDiscord size={20} color="#737373"/>
                                    </a>
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                        <div>
                            <h3 className="mb-4 font-bold">Product</h3>
                            <ul className="text-muted-foreground space-y-3 text-sm">
                                <li className="hover:text-primary font-medium"><a href="#">Overview</a></li>
                                <li className="hover:text-primary font-medium"><a href="#">Pricing</a></li>
                                <li className="hover:text-primary font-medium"><a href="#">Marketplace</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold">Company</h3>
                            <ul className="text-muted-foreground space-y-3 text-sm">
                                <li className="hover:text-primary font-medium"><a href="#">About</a></li>
                                <li className="hover:text-primary font-medium"><a href="#">Team</a></li>
                                <li className="hover:text-primary font-medium"><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold">Resources</h3>
                            <ul className="text-muted-foreground space-y-3 text-sm">
                                <li className="hover:text-primary font-medium"><a href="#">Help</a></li>
                                <li className="hover:text-primary font-medium"><a href="#">Sales</a></li>
                                <li className="hover:text-primary font-medium"><a href="#">Advertise</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;