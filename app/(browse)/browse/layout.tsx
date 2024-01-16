import { CarouselProgressBar } from "@/components/carousels/carousel-progress-bar";
import { HeroHomepage } from "@/components/hero-homepage";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CarouselProgressBar />
      {/* <HeroHomepage /> */}
      {children}
    </>
  );
};

export default BrowseLayout;
