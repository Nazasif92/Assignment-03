import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WorkManagment from "./components/work-managment";
import Customize from "./components/customize";
import Customize2 from "./components/customize2";
import YourWork from "./components/your-work";
import Sponsors from "./components/Sponsors";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WorkManagment/>
      <Customize/>
      <Customize2/>
      <YourWork/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}
