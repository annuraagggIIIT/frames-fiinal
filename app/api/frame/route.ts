import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const data = [
    { height: 80, status: 'Airborne', distance: 5043762.5 },
    { height: 80, status: 'Airborne', distance: 5043501 },
    { height: 80, status: 'Airborne', distance: 0 },
    { height: 80, status: 'Airborne', distance: 5043777 },
    { height: 80, status: 'Airborne', distance: 0 }
  ];

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Airborne Drones</title>
      </head>
      <body>
        <h1>Airborne Drones</h1>
        <ul>
          ${data.map(({ height, status, distance }) => `<li>Height: ${height}, Status: ${status}, Distance: ${distance}</li>`).join('')}
        </ul>
      </body>
    </html>
  `;

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
export async function POST(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    if (!id) {
      return new NextResponse('ID not provided', { status: 400 });
    }
  
    const nextId = parseInt(id) + 1;
  
    return new NextResponse(`Next ID: ${nextId}`);
  }
  