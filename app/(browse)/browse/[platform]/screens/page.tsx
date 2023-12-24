export default function ScreensPage({ params }: { params: { platform: string } }) {
  return <div>{params.platform} -- Screens</div>;
}
