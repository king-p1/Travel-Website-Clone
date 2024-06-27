import { Category, Hero,Destination,Booking,CTA,Footer,Testimonials, Companies } from "./components"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <div className="body">
      <NavBar/>
      <Hero/>
      <Category/>
      <Destination/>
      <Booking/>
      <Testimonials/>
      <Companies/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App