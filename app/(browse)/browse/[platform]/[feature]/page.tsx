import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

interface FeaturePageProps {
  params: {
    platform: string;
    feature: string;
  };
}

export default function FeaturePage({ params }: FeaturePageProps) {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-4">
        <Button
          size="lg"
          variant="secondary"
          className="hidden md:inline-flex px-4 rounded-full"
          asChild
        >
          <div className="flex items-center gap-x-2">
            <Icons.settings2 className="size-4" />
            <span>Filters</span>
          </div>
        </Button>

        <Separator orientation="vertical" className="h-8" />
        <div>carousel</div>
      </div>

      <div>
        {params.platform} -- {params.feature}
        <div className="h-[900px]">sa</div>
      </div>
    </div>
  );
}
