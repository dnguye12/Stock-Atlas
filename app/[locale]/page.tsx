import Hero from "./(home)/components/Hero";
import DailyGainers from "./(home)/components/DailyGainers";
import DailyLosers from "./(home)/components/DailyLosers";
import DailyActive from "./(home)/components/DailyActive";
import DailyShorted from "./(home)/components/DailyShorted";

export default function Home() {


  return (
    <>
      <Hero />
      <div className="container mx-auto grid grid-cols-2 gap-4 mt-4 mb-16 px-10">
        <DailyGainers />
        <DailyLosers />
        <DailyActive />
        <DailyShorted />
      </div>
    </>


  )
}
