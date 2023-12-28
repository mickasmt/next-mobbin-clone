interface FeaturePageProps {
  params: {
    platform: string;
    feature: string;
  };
}

export default function FeaturePage({ params }: FeaturePageProps) {
  return (
    <div>
      {params.platform} -- {params.feature}
    </div>
  );
}
