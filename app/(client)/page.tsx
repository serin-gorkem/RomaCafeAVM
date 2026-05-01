import Footer from "../../components/home/Footer";
import HeroSlider from "../../components/home/HeroSlider";
import MenuCategories from "../../components/home/MenuCategories";
import Navbar from "../../components/home/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <MenuCategories />
      <Footer />
    </main>
  );
}