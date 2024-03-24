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
    'fc:frame:image': 'https://imgs.search.brave.com/ViN_IrOw632L-pBgOdg66JBTSBD0jQheRf75qebcjbo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yZWQtc3BvcnQt/Y2FyLXdhbGxwYXBl/cl83OTY1ODAtMTc1/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw', // Update with your image URL
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
