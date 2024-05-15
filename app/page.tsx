import LoginPage from "./login/page";
import PrivatePage from "./private/page";
import Link from "next/link"
import Carousel from "@/components/Carousel"

export default function Home() {
  return (
    <main className="mx-20">
      <Carousel />
    </main>
  );
}
