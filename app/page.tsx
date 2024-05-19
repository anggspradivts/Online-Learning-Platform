import LoginPage from "./login/page";
import PrivatePage from "./private/page";
import Link from "next/link"
import Carousel from "@/app/landingpage/Carousel"
import Intro from "@/app/landingpage/Intro"
import StarterCourse from "@/app/landingpage/StarterCourse";
import MentorSec from "@/app/landingpage/MentorSec"
import CourseCate from "@/app/landingpage/CourseCate"
// import PrivatePage from "./private/page";

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
