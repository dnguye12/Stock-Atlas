import Hero from "./(home)/components/Hero";
import DailyGainers from "./(home)/components/DailyGainers";

export default function Home() {


  return (
    <>
      <Hero />
      <div className="container mx-auto grid grid-cols-2 mt-4">
        <DailyGainers />
      </div>

    </>


  )
}
