import Link from "next/link";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Services";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>



<NavBar />
      <Hero />
      <About />
      <Service />
      <GetStarted />
      <Footer />

    </div>
  );
}
