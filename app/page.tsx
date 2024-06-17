import StackedDiv from "@/components/common/stacked-div";
import { bitter } from "./fonts";
import Link from "next/link";
import { nanoid } from "nanoid";

export default function Home() {
  const sellingPoints = [
    `Has over 6 1/2 years' experience in software development,
    most of which was spent working with component-based architecture?`,
    "Is a good communicator and can explain technical concepts to other devs, PMs, and customers?",
    "Created build-test-deployment pipelines? For a frontend application, even?",
    "Knows how to thrive in an agile environment?",
    "Work well solo, in pairs, or in a mob?",
    "Loves writing documentation?",
    "Can learn anything?"
  ];

  const sellingPointElements = sellingPoints.map((point) => {
    return (
      <StackedDiv
        key={nanoid()}
        content={point}
        topColor="#FFFFFF"
        middleColor="#E6EAF5"
        bottomColor="#CCD4EB"
        />
    )
  });

  return (
    <div className="main-page">
      <div className={`top-section ${bitter.className}`}>
        <StackedDiv
          content="Hey, you!"
          topColor="#99BBFF"
          middleColor="#6086EF"
          bottomColor="#18297B" />
        <span className="bigger bold">Yeah, you!</span>
        <span>Do you need a frontend dev who:</span>
      </div>
      <div className="middle-section">
        {sellingPointElements}
      </div>
      <div className="bottom-section">
        <p>Then check out my <Link href="/resume">resume</Link>!</p>
        <p>If you&apos;d like to review my work, you can see the codebase for this site <a href="https://github.com/AP94/demo-card">here</a>.</p>
        <p className="smaller">And while you&apos;re here, <Link href="/yacht">why not play a game?</Link></p>
      </div>
    </div>
  );
}
