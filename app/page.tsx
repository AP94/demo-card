import Link from "next/link";

export default function Home() {
  return (
    <div className="main-page">
      <div className="hello-world">Hello!</div>
      <p>My name is Anna, and I like to make things. I&apos;m a software dev with about 6 3/4 years&apos; experience, mostly concentrated on the front-end, but that doesn&apos;t mean I&apos;ve never worked on a backend before!</p>
      <div>
        <span className="tooltip">
          <span>I can learn anything.</span>
          <span className="tooltip-text">Seriously, I went to Mudd, and I only lost about 30% of my sanity!</span>
        </span> In fact, after spending years working in AngularJS (rest in peace), and then getting laid off, I learned ReactJS to make myself hireable, then made this website to prove it!
      </div>
      <p>For a demonstration of my skills, <Link href="/yacht">why not play a game?</Link> For a full review of my work, the entire codebase for this site can be found <a href="https://github.com/AP94/demo-card">on my Github.</a> Finally, if you&apos;d like to review my resume, that can be found over <Link href="/resume">here.</Link></p>
      <span>Thanks for stopping by!</span>
    </div>
  );
}
