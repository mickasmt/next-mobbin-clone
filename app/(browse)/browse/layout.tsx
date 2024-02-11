import { HerosComponent } from "@/components/hero-switcher";


const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HerosComponent />
      {children}
    </>
  );
};

export default BrowseLayout;
