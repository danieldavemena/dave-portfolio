import type { Route } from "./+types/home";
import LandingPage from "../index/page";
import { Analytics } from "@vercel/analytics/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniel Dave" },
    { name: "Porfolio", content: "My developer portfolio" },
  ];
}

export default function Home() {
  return (
    <main>
      <Analytics />
      <LandingPage />
    </main>
  );
}
