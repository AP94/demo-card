"use client"; // This is a client component

import Link from "next/link";

export default function Page() {
  return (
    <div className="yacht-info-page">
      <div className="instructions">
        [TODO]
      </div>
      <Link href="/yacht">
        <button className="action-button" data-message="Click to play Yacht">Play</button>
      </Link>
    </div>
  )
}