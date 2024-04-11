import Link from 'next/link';

export default function GamesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  return (
    <section className="yacht-section">
      <nav>
        <Link className="back-button" href="/"></Link>
        <div className="title-container">I Can't Believe It's Not YAHTZEE</div>
      </nav>

      {children}
    </section>
  )
}