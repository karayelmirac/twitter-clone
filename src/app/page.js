import Container from "@/layout/Container";
import Content from "@/layout/Content";
import Sidebar from "@/layout/Sidebar";
import Widgets from "@/layout/Widgets";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
}
