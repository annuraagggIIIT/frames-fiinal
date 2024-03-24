import type { Metadata } from 'next';

const data = [
  { height: 80, status: 'Airborne', distance: 5043762.5 },
  { height: 80, status: 'Airborne', distance: 5043501 },
  { height: 80, status: 'Airborne', distance: 0 },
  { height: 80, status: 'Airborne', distance: 5043777 },
  { height: 80, status: 'Airborne', distance: 0 }
];

const stringifiedData = JSON.stringify(data);

export const metadata: Metadata = {
  title: 'Cosmic Cowboys',
  description: 'A frame telling the story of Cosmic Cowboys',
  openGraph: {
    title: 'Cosmic Cowboys',
    description: 'A frame telling the story of Cosmic Cowboys',
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://imgur.com/a/LLOgeKS', // Update with your image URL
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
      <div>
        {data.map(() => (
          <p>
            Height: 80, Status: Airborne, Distance: 5043762.5
          </p>
        ))}
        <p>
            Height: 80, Status: Airborne, Distance: 5043501
          </p>
          <p>
            Height: 80, Status: Airborne, Distance: 0
          </p>
          <p>
            Height: 80, Status: Airborne, Distance: 5043777
          </p>
          <p>
            Height: 80, Status: Airborne, Distance: 0
          </p>
      </div>
    </>
  );
}
