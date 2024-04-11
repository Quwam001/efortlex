import Link from "next/link";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Services";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import GetToKnowUs from "./Components/GetToKnowUs";
import WhyChooseUs from "./Components/WhyChooseUs";
import Reviews from "./Components/Reviews";

export default function Home() {
  return (
    <div>




<div className="bg-gradient-to-b from-blueG pb-3">
<NavBar />
      <Hero />
</div>
<GetToKnowUs />
<WhyChooseUs/>
<Service />
<Reviews />
      {/* <About /> */}
      <GetStarted />
      <Footer />

    </div>
  );
}
