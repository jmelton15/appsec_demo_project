import Nav from '../components/Nav';
import { controls, findings } from '../lib/data';

export default function HomePage() {
  const openCritical = findings.filter((f) => f.severity === 'Critical' && f.status === 'Open').length;
  const avgScore = Math.round(controls.reduce((sum, c) => sum + c.score, 0) / controls.length);

  return (
    <main className="shell">
      <Nav />
      <section className="card">
        <h1>Security & Compliance Overview</h1>
        <p className="small">
          Training dashboard for practicing AppSec review, CI/CD security scanning, vulnerability management, and GRC-style reporting.
        </p>
      </section>

      <section className="grid">
        <div className="card"><h2>{avgScore}%</h2><p>Compliance Score</p></div>
        <div className="card"><h2>{controls.length}</h2><p>Tracked Controls</p></div>
        <div className="card"><h2>{findings.length}</h2><p>Total Findings</p></div>
        <div className="card"><h2>{openCritical}</h2><p>Open Criticals</p></div>
      </section>

      <section className="grid2">
        <div className="card">
          <h2>Control Status</h2>
          <table>
            <thead>
              <tr><th>Control</th><th>Status</th><th>Owner</th><th>Score</th></tr>
            </thead>
            <tbody>
              {controls.map((control) => (
                <tr key={control.id}>
                  <td><strong>{control.id}</strong><br />{control.name}</td>
                  <td><span className="badge">{control.status}</span></td>
                  <td>{control.owner}</td>
                  <td>{control.score}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>Top Risks</h2>
          {findings.filter((f) => f.status === 'Open').map((finding) => (
            <div key={finding.id} style={{ marginBottom: 14 }}>
              <span className={`badge ${finding.severity === 'Critical' ? 'danger' : 'warn'}`}>{finding.severity}</span>
              <h3>{finding.title}</h3>
              <p className="small">{finding.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
