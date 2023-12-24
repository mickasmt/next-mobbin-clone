export default function FlowsPage({ params }: { params: { platform: string } }) {
  return <div>{params.platform} -- Flows</div>;
}
