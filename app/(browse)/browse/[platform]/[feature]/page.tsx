import { ButtonHoverCard } from "@/components/button-hover-card";
import CarouselButtonsTags from "@/components/carousels/carousel-buttons-tags";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FeaturePageProps {
  params: {
    platform: string;
    feature: string;
  };
}

export default function FeaturePage({ params }: FeaturePageProps) {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-4 -margin-x -my-3">
        <Button
          size="lg"
          variant="secondary"
          className="max-md:hidden rounded-full"
          asChild
        >
          <div className="flex items-center gap-x-2">
            <Icons.settings2 className="size-4" />
            <span>Filters</span>
          </div>
        </Button>

        <Separator orientation="vertical" className="max-md:hidden h-8" />
        <div className="flex-grow overflow-hidden">
          <CarouselButtonsTags />
          {/* <ButtonHoverCard /> */}
        </div>
      </div>

      <div className="h-[900px]">
        {params.platform} -- {params.feature}
      </div>
    </div>
  );
}
