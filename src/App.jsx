import { CardSlider } from "./Components/CardSlider/CardSlider"
import Carousel from "./Components/Carousel/Carousel"
import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import NewsSchedule from "./Components/NewsSchedule/NewsSchedule"
import FooterComponent from "./Components/FooterComponent/FooterComponent"

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <CardSlider />
      <NewsSchedule />
      <FooterComponent />
    </>
  )
}

export default App
