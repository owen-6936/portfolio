import Hero from "./home/Hero";
import Skills from "./home/Skills";
import "../styles/home.css";
import Card from "./Card";
import TopProjects from "./home/TopProjects";

export default function Home() {
  return (
    <div className="flex flex-col justify-around min-h-screen">
      <Card className="m-4" padding="">
        <Card.Header
          className="introduction"
          title="Welcome To My Portfolio: An introduction"
          align="center"
        />
        <Hero />
        <Skills />
        <TopProjects />
      </Card>
    </div>
  );
}
