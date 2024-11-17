import "./globals.css";
import InnovationsCard from "./components/innovation/InnovationsCard";
import Events from './components/Events/Events'
import CoursesSection from "./components/courses/CoursesSection";
import Testimonial from "./components/testimonial/Testimonial";
import Gallery from "./components/gallery/Gallery";


export default function Home() {
  return (
    <>
      <InnovationsCard />
      <CoursesSection />
      <Events/>
      <Testimonial />
      <Gallery />
    </>
  );
}
