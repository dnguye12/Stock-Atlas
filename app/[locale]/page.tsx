import Hero from "./(home)/components/Hero";
import DailyGainers from "./(home)/components/DailyGainers";
import DailyLosers from "./(home)/components/DailyLosers";

export default function Home() {


  return (
    <>
      <Hero />
      <div className="container mx-auto grid grid-cols-2 gap-4 mt-4 px-10">
        <DailyGainers />
        <DailyLosers />
      </div>

    </>


  )
}
