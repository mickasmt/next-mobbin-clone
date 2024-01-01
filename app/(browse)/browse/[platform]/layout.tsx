import { CategoriesList } from "@/components/categories-list";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col gap-y-5 pt-8 marge-x">
        <h1 className="text-heading">Browse</h1>
        <CategoriesList />
        {children}
      </div>
    </>
  );
};

export default PlatformLayout;
