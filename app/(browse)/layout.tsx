import { HeroHomepage } from "@/components/hero-homepage";
import { Navbar } from "./_components/navbar";
import { CarouselProgressBar } from "@/components/carousels/carousel-progress-bar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CarouselProgressBar />
      {/* <HeroHomepage /> */}
      <main className="flex-1">{children}</main>

      {/* <Footer /> */}
    </div>
  );
};

export default BrowseLayout;
