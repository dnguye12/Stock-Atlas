import { Button } from "@/components/ui/button";
import { BrainCircuitIcon, ChartAreaIcon, ChartPieIcon, ExternalLinkIcon, LucideProps, NewspaperIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface HeroFeatureProps {
    title: string,
    desc: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

const HeroFeature = ({ title, desc, icon: Icon }: HeroFeatureProps) => {
    return (
        <div className="flex flex-col gap-3 border p-5 bg-sidebar rounded-lg">
            <Icon className="size-6" />
            <div>
                <h2 className="text-sm font-semibold md:text-base text-start">{title}</h2>
                <p className="text-sm text-muted-foreground md:text-base text-start">{desc}</p>
            </div>
        </div>
    )
}

const Hero = () => {
    const t = useTranslations("Home.Hero")

    return (
        <header className="w-full">
            <div className="relative overflow-hidden pt-32 h-full my-auto">
                <div className="relative z-20 container  mx-auto">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="rounded-xl bg-sidebar p-4 shadow backdrop-blur-sm border">
                            <img src="/icon.svg" alt="logo" className="h-16" />
                        </div>
                        <div className="container mx-auto">
                            <h1 className="mb-6 text-3xl font-bold tracking-tight text-pretty lg:text-5xl">{t("title")} <span className=" ">Dividend Insight</span></h1>
                            <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                                {t("desc")}
                            </p>
                        </div>
                        <div className="mt-6 flex justify-center gap-3">
                            <Button className="cursor-pointer" size={"lg"}>Get Started</Button>
                            <Button className="cursor-pointer dark:bg-sidebar" variant={"outline"} size={"lg"}>Learn more <ExternalLinkIcon /></Button>
                        </div>
                        <div className="container mx-auto px-10">
                            <div className="mt-16 hidden md:grid gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
                                <HeroFeature
                                    icon={ChartAreaIcon}
                                    title={t("feature-1-title")}
                                    desc={t("feature-1-desc")}
                                />
                                <HeroFeature
                                    icon={ChartPieIcon}
                                    title={t("feature-2-title")}
                                    desc={t("feature-2-desc")}
                                />
                                <HeroFeature
                                    icon={BrainCircuitIcon}
                                    title={t("feature-3-title")}
                                    desc={t("feature-3-desc")}
                                />
                                <HeroFeature
                                    icon={NewspaperIcon}
                                    title={t("feature-4-title")}
                                    desc={t("feature-4-desc")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark:hidden absolute inset-x-0 top-0 flex h-full w-full items-center justify-center z-10">
                    <img src="/hero-bg.svg" className="[mask-image:radial-gradient(50%_50%_at_center,white,transparent)]" />
                </div>
                <div className="dark:block hidden absolute h-full w-full bg-[linear-gradient(0deg,rgba(10,10,10,1)_0%,rgba(10,10,10,0)_75%)] top-0 left-0 z-10"></div>
                <div className="dark:block hidden absolute h-full w-full bg-[url(/hero-bg-dark.png)] bg-center bg-cover bg-no-repeat top-0 left-0 z-0">
                </div>
            </div>
        </header>
    );
}

export default Hero;