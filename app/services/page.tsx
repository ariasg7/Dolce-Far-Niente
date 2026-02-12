import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ServicesPage as ServicesContent } from "../../components/ServicesPage";

export default function ServicesPageRoute() {
  return (
    <div className="min-h-screen bg-[#E5E1DE]">
      <Navbar />
      
      {/* Changed pt-32 to pt-20 to pull the content up */}
      <main> 
        <div className="max-w-[1920px] mx-auto">
          {/* If ServicesContent also has padding inside it, 
              you might even want to use pt-0 here */}
          <ServicesContent />
        </div>
      </main>

      <Footer />
    </div>
  );
}