import Link from "next/link";

export default function Home() {
  return (
    <div className="main-page">
      <h1>Under Construction</h1>
      <Link href="/yacht">
        <button className="action-button">Play my game!</button>
      </Link>
    </div>
  );
}
