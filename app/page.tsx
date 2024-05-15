import LoginPage from "./login/page";
import PrivatePage from "./private/page";
import Link from "next/link"
import Carousel from "@/components/Carousel"
import Intro from "@/components/Intro"
import StarterCourse from "@/components/StarterCourse";
import MentorSec from "@/components/MentorSec"
import CourseCate from "@/components/CourseCate"

export default function Home() {
  return (
    <main className="mx-0 sm:mx-20">
      <Carousel />
      <Intro />
      <StarterCourse />
      <MentorSec />
      <CourseCate />
    </main>
  );
}
