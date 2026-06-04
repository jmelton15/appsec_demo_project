import { NextResponse } from 'next/server';
import { findings } from '../../../lib/data';

export async function GET() {
  // VULN-006: Sensitive data exposure.
  // Returns customer names and exploit data to any unauthenticated user.
  return NextResponse.json({ findings });
}
