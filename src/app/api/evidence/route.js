import { NextResponse } from 'next/server';
import { evidence } from '../../../lib/data';

export async function GET() {
  // VULN-004: Missing authentication and authorization check.
  // This should verify a JWT and role before returning evidence.
  return NextResponse.json({ evidence });
}
