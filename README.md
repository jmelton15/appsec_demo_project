# Vulnerable Training App

This is a deliberately vulnerable Next.js application for AppSec / DevSecOps practice.
Do not deploy this publicly.

## Included intentional vulnerabilities

| ID | Vulnerability | Location | Purpose |
|---|---|---|---|
| VULN-001 | Hardcoded secret | `lib/auth.js` | Secrets scanning practice |
| VULN-002 | Weak auth / auth bypass | `app/api/auth/login/route.js`, API routes | AuthZ design review practice |
| VULN-003 | Stored/reflected XSS | `app/findings/page.jsx` | Secure coding and SAST practice |
| VULN-004 | Missing authorization check | `app/api/evidence/route.js` | Broken access control practice |
| VULN-005 | Vulnerable dependencies | `package.json` | SCA/dependency scanning practice |
| VULN-006 | Sensitive data exposure | `app/api/findings/route.js` | API security review practice |

## Run locally

```bash
npm install
npm run dev
```

Then visit:

```text
http://localhost:3000
```

## Demo login

```text
admin@example.com / password
analyst@example.com / password
```

The login route also includes an intentional bypass for training.

## Suggested security tools

```bash
semgrep scan --config auto
npx gitleaks detect --source .
npm audit
trivy fs .
```
