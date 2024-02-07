import { CardsList } from "@/components/cards-list";
import { TagsList } from "@/components/tags-list";

interface FeaturePageProps {
  params: {
    platform: string;
    feature: string;
  };
}

export default function FeaturePage({ params }: FeaturePageProps) {
  return (
    <div className="flex flex-col gap-y-6">
      <TagsList />

      <div className="h-[900px]">
        <CardsList platform={params.platform} feature={params.feature} />
      </div>
    </div>
  );
}
