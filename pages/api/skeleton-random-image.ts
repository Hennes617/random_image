// pages/api/skeleton-random-image.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';

const imagesList = require('../../lists/skeleton-images-list.json');
const images: string[] = imagesList.images;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  console.log('Image: ' + randomImage);

  https.get(randomImage, (response) => {
    res.setHeader('Content-Type', 'image/jpeg');
    response.pipe(res);
  });
};
