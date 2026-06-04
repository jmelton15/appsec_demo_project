'use client';

import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

export default function EvidencePage() {
  const [items, setItems] = useState([]);
  const [raw, setRaw] = useState('');

  async function loadEvidence() {
    const response = await fetch('/api/evidence');
    const data = await response.json();
    setItems(data.evidence || []);
    setRaw(JSON.stringify(data, null, 2));
  }

  useEffect(() => {
    loadEvidence();
  }, []);

  return (
    <main className="shell">
      <Nav />
      <section className="card">
        <h1>Audit Evidence</h1>
        <p className="small">
          This page intentionally calls an API route with missing authorization checks.
        </p>
        <button onClick={loadEvidence}>Reload Evidence</button>
      </section>

      <br />

      <section className="grid2">
        <div className="card">
          <h2>Evidence Records</h2>
          {items.map((item) => (
            <div key={item.id} style={{ marginBottom: 16 }}>
              <h3>{item.title}</h3>
              <p><strong>Control:</strong> {item.control}</p>
              <p><strong>Classification:</strong> {item.classification}</p>
              <p className="small">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <h2>Raw API Response</h2>
          <pre>{raw}</pre>
        </div>
      </section>
    </main>
  );
}
