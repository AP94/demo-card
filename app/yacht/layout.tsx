import Link from 'next/link';

export default function GamesLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    
    return (
      <section>
        <Link className="back-button" href="/"></Link>
        <nav></nav>
   
        {children}
      </section>
    )
  }