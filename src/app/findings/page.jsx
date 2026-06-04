import Nav from '../../components/Nav';
import { findings } from '../../lib/data';

export default function FindingsPage({ searchParams }) {
  const query = searchParams?.q?.toLowerCase() || '';
  const filtered = findings.filter((finding) =>
    finding.title.toLowerCase().includes(query) || finding.description.toLowerCase().includes(query)
  );

  return (
    <main className="shell">
      <Nav />
      <section className="card">
        <h1>Vulnerability Findings</h1>
        <p className="small">Try searching for: xss, secret, evidence, dependency</p>
        <form method="GET">
          <input name="q" placeholder="Search findings" defaultValue={searchParams?.q || ''} />
          <button type="submit">Search</button>
        </form>
      </section>

      <br />

      <table>
        <thead>
          <tr><th>ID</th><th>Finding</th><th>Severity</th><th>Control</th><th>Exploit Demo</th></tr>
        </thead>
        <tbody>
          {filtered.map((finding) => (
            <tr key={finding.id}>
              <td>{finding.id}</td>
              <td>
                <strong>{finding.title}</strong>
                <p className="small">{finding.description}</p>
              </td>
              <td><span className={`badge ${finding.severity === 'Critical' ? 'danger' : 'warn'}`}>{finding.severity}</span></td>
              <td>{finding.control}</td>
              <td>
                {/* VULN-003: XSS. Rendering untrusted HTML directly. */}
                <div dangerouslySetInnerHTML={{ __html: finding.exploit }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
