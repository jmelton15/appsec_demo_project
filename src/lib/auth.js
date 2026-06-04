import jwt from 'jsonwebtoken';

// VULN-001: Hardcoded production-like secret. This should be detected by secret scanners.
export const JWT_SECRET = 'super-secret-prod-key-12345';
export const STRIPE_API_KEY = 'sk_live_51NTrainingHardcodedSecretExample';

const users = [
  { id: 1, email: 'admin@example.com', password: 'password', role: 'admin' },
  { id: 2, email: 'analyst@example.com', password: 'password', role: 'analyst' }
];

export function authenticate(email, password) {
  return users.find((user) => user.email === email && user.password === password);
}

export function createToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
