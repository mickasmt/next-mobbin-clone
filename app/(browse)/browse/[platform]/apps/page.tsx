export default function AppsPage({ params }: { params: { platform: string } }) {
  return <div>{params.platform} -- Apps</div>;
}
