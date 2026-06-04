export const controls = [
  {
    id: 'AC-2',
    name: 'Account Management',
    framework: 'NIST 800-53',
    status: 'Needs Evidence',
    owner: 'Identity Team',
    score: 64
  },
  {
    id: 'RA-5',
    name: 'Vulnerability Monitoring and Scanning',
    framework: 'NIST 800-53',
    status: 'At Risk',
    owner: 'AppSec',
    score: 48
  },
  {
    id: 'SI-10',
    name: 'Information Input Validation',
    framework: 'NIST 800-53',
    status: 'Failing',
    owner: 'Platform Team',
    score: 35
  },
  {
    id: 'CM-6',
    name: 'Configuration Settings',
    framework: 'NIST 800-53',
    status: 'Passing',
    owner: 'CloudOps',
    score: 91
  }
];

export const findings = [
  {
    id: 'FIND-001',
    title: 'Stored XSS in finding notes',
    severity: 'High',
    status: 'Open',
    control: 'SI-10',
    owner: 'Platform Team',
    description: 'Finding notes are rendered as raw HTML without sanitization.',
    exploit: '<img src=x onerror="alert(\'XSS from finding notes\')" />',
    customer: 'Acme Federal'
  },
  {
    id: 'FIND-002',
    title: 'Hardcoded JWT signing secret',
    severity: 'Critical',
    status: 'Open',
    control: 'AC-2',
    owner: 'Identity Team',
    description: 'JWT signing key is stored directly in source code.',
    exploit: 'API_SECRET_KEY=super-secret-prod-key-12345',
    customer: 'Internal'
  },
  {
    id: 'FIND-003',
    title: 'Evidence endpoint lacks authorization',
    severity: 'Critical',
    status: 'Open',
    control: 'RA-5',
    owner: 'AppSec',
    description: 'Any caller can retrieve sensitive audit evidence.',
    exploit: 'curl http://localhost:3000/api/evidence',
    customer: 'Acme Federal'
  },
  {
    id: 'FIND-004',
    title: 'Vulnerable dependencies detected',
    severity: 'Medium',
    status: 'Accepted Risk',
    control: 'RA-5',
    owner: 'AppSec',
    description: 'Outdated dependencies exist for training dependency scans.',
    exploit: 'npm audit',
    customer: 'Internal'
  }
];

export const evidence = [
  {
    id: 'EVD-001',
    control: 'AC-2',
    title: 'Privileged user export',
    uploadedBy: 'admin@example.com',
    classification: 'Confidential',
    content: 'admin@example.com, root@example.com, contractor@example.com'
  },
  {
    id: 'EVD-002',
    control: 'RA-5',
    title: 'Quarterly vulnerability scan',
    uploadedBy: 'analyst@example.com',
    classification: 'Restricted',
    content: 'Critical: 2, High: 7, Medium: 19, Low: 44'
  },
  {
    id: 'EVD-003',
    control: 'SI-10',
    title: 'Secure code review notes',
    uploadedBy: 'security@example.com',
    classification: 'Internal',
    content: 'Input validation gaps found in notes and evidence upload paths.'
  }
];
