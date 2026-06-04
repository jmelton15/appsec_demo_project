import { NextResponse } from 'next/server';
import { authenticate, createToken } from '../../../../lib/auth';

export async function POST(request) {
  const body = await request.json();
  const { email, password, debugAdmin } = body;

  // VULN-002: Intentional auth bypass for training.
  // A caller can send { "debugAdmin": true } and become admin.
  if (debugAdmin === true) {
    const token = createToken({ id: 999, email: 'debug-admin@example.com', role: 'admin' });
    return NextResponse.json({ token, role: 'admin', warning: 'debug admin bypass used' });
  }

  const user = authenticate(email, password);

  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = createToken(user);
  return NextResponse.json({ token, role: user.role });
}
