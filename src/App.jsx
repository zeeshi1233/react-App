import { Nav } from "./components/nav/Nav";
import { CarouselCustomNavigation } from "./components/carousel/carousel";
import { EcommerceCard } from "./components/card/Card";
import { FooterWithSocialLinks } from "./components/footer/footer";
function App() {
  return (
    <>
  <Nav/>
  <CarouselCustomNavigation/>
  <h3 className="text-center font-bold font-sans text-lg mt-6"> <span className="border-b-4 border-indigo-500" >Product</span> </h3>
  <div className="grid gap-4 lg:grid-cols-3 grid-cols-l grid-rows-2 mt-6">
  <EcommerceCard/>
  <EcommerceCard/>
  <EcommerceCard/>
  </div>
  <FooterWithSocialLinks/> 
    </>
  );
}

export default App;
