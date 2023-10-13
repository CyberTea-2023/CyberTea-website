import "./App.css";
import Carousel from "../Components/Carousel/Carousel";
import Navbar from "../Components/Navbar/Navbar";
import CardSlider from "../Components/CardSlider/CardSlider";
import NewsSchedule from "../Components/ScheduleAndRegister/ScheduleAndRegister";
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import Registration from "../Components/Registration/Registration";
import TopHeader from "../Components/Top Header/Header";
import About from "../Components/About/About";
import Patron from "../Components/Patron/Patron";
import TeamHolder from "../Components/Team/TeamHolder";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.innerWidth < 950) {
        const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

        const topColor = `rgb(0, 30, 55) ${70 + scrollProgress * 30}%`;
        const bottomColor = `rgb(3, 54, 86) ${70 - scrollProgress * 30}%`;

        document.getElementById("root").style.setProperty("--gradient-top", topColor);
        document.getElementById("root").style.setProperty("--gradient-bottom", bottomColor);

      } else {

        const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

        const topColor = `rgb(0, 30, 55) ${50 + scrollProgress * 50}%`;
        const bottomColor = `rgb(3, 54, 86) ${50 - scrollProgress * 50}%`;

        document.getElementById("root").style.setProperty("--gradient-top", topColor);
        document.getElementById("root").style.setProperty("--gradient-bottom", bottomColor);
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <TopHeader />
      <Carousel />
      <div className="about_container">
        <About />
      </div>
      <Patron />
      <CardSlider />
      <NewsSchedule />
      <TeamHolder />
      <FooterComponent />
    </>
  );
}

export default App;
