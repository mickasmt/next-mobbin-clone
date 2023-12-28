import CarouselProgressBar from "@/components/carousels/carousel-progress-bar";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CarouselProgressBar />

      <div className="flex flex-col w-full">
        <h2>Browse</h2>
        <div>Categories list</div>
        {children}
      </div>
    </>
  );
};

export default PlatformLayout;
