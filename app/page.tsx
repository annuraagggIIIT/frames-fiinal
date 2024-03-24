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
    'fc:frame:image': 'https://imgs.search.brave.com/R9CdhY8TWCMOQOU_FclRjsxOktvKfrBD7oH-VwIxADc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTU5/MjQyMDI0L3Bob3Rv/L3RoZS1kcm9uZS1p/bi1zdW5zZXQtc2t5/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1scmd0NVA3RDBt/ZVNUWDh0M1NweTRn/SmhrM0ZGZmpBMTR1/UnRBV1FhczNNPQ', // Update with your image URL
  },
};

export default function Page() {
  return (
    <>
      <h1>SkyFrames</h1>
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
