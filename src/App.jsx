import Footer from "./componet/Footer";
import Header from "./componet/Header";
import Schedule from "./componet/Schedule";
import Sections from "./componet/Sections";
import Testimonial from "./Testimonial";

function App() {
  return (
    <div className="font-poppins font-semibold">
      <Header />
      <Sections />
      <Testimonial />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
