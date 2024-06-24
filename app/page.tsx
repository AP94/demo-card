import StackedDiv from "@/components/common/stacked-div";
import { bitter } from "./fonts";
import { nanoid } from "nanoid";
import Link from "next/link";
import { strings as s, reactLinkString as r, externalLinkString as l } from "./strings";

export default function Home() {
  const sellingPoints = [
    s['main.point1'],
    s['main.point2'],
    s['main.point3'],
    s['main.point4'],
    s['main.point5'],
    s['main.point6'],
    s['main.point7'],
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
          content={s['main.header']}
          topColor="#99BBFF"
          middleColor="#6086EF"
          bottomColor="#18297B" />
        <span className="bigger semibold">{s['main.subheader']}</span>
        <span>{s['main.doYouNeed']}</span>
      </div>
      <div className="middle-section">
        {sellingPointElements}
      </div>
      <div className="bottom-section">
        <p className="bigger">{r('main.resumeLink', '/resume')}</p>
        <p>{l('main.githubLink', 'https://github.com/AP94/demo-card')}</p>
        <p>{r('main.yachtLink', '/yacht')}</p>
      </div>
    </div>
  );
}
