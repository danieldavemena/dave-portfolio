import type { Route } from "./+types/home";
import LandingPage from "../index/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniel Dave" },
    { name: "Porfolio", content: "My developer portfolio" },
  ];
}

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
