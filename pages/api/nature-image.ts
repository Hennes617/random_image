// pages/api/nature-image.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';

const imagesList = require('../../lists/example-images-list.json');
const images: string[] = imagesList.images;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  console.log('Image: ' + randomImage);

  https.get(randomImage, (response) => {
    if (response.statusCode !== 200) {
      res.statusCode = 500;
      res.end('Fehler beim Abrufen des Bildes.');
      return;
    }
    res.setHeader('Content-Type', 'image/jpeg');
    response.pipe(res);
  }).on('error', (e) => {
    res.statusCode = 500;
    res.end('Serverfehler: ' + e.message);
  });
};
