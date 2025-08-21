import Hero from "./home/Hero";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="flex flex-col justify-around min-h-screen">
      <Hero />
    </div>
  );
}
