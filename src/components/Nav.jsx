import Link from 'next/link';

export default function Nav() {
  return (
    <div className="nav">
      <strong>GRC Vulnerable Dashboard</strong>
      <div>
        <Link href="/">Dashboard</Link>
        <Link href="/findings">Findings</Link>
        <Link href="/evidence">Evidence</Link>
      </div>
    </div>
  );
}
