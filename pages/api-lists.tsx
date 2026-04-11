// pages/api-lists.tsx
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

type ApiEntry = {
  title: string;
  description?: string;
  path: string;
};

const apiEntries: ApiEntry[] = [
  {
    title: 'Nature Images',
    description: 'A random image from a curated nature collection.',
    path: '/api/nature-image',
  },
  {
    title: 'Nature 2000',
    description: 'A large nature image collection endpoint.',
    path: '/api/nature-2000',
  },
  {
    title: 'Night Sky',
    description: 'A random image from a night sky collection.',
    path: '/api/night-sky',
  },
  {
    title: 'Skeleton Images',
    description: 'Skeleton-themed random images.',
    path: '/api/skeleton-random-image',
  },
  {
    title: 'Studio Ghibli',
    description: 'Random imagery inspired by Studio Ghibli style.',
    path: '/api/studio-ghibli',
  },
  {
    title: 'Minecraft Memes',
    description: 'Random Minecraft meme images.',
    path: '/api/minecraft-memes',
  },
  {
    title: 'Swag Wallpapers',
    description: 'Random wallpapers from the swag collection.',
    path: '/api/swag-wallpaper',
  },
];

export default function ApiList() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Random Image API List</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="List of available Random Image APIs provided by Woxly.de."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed w-full bg-white bg-opacity-95 shadow z-50">
        <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
          <Link legacyBehavior href="/">
            <a className="text-2xl font-semibold text-blue-600">Woxly.de</a>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
          <ul
            className={`md:flex md:items-center md:gap-8 absolute md:static bg-white md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ${
              menuOpen ? 'top-16' : 'top-[-490px]'
            }`}
          >
            <li>
              <Link legacyBehavior href="/">
                <a
                  className="block py-2 md:py-0 text-gray-800 hover:text-blue-600"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/api-lists">
                <a
                  className="block py-2 md:py-0 text-gray-800 hover:text-blue-600 font-semibold"
                  onClick={handleLinkClick}
                >
                  API List
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/docs">
                <a
                  className="block py-2 md:py-0 text-gray-800 hover:text-blue-600"
                  onClick={handleLinkClick}
                >
                  Docs
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Hennes617/random_image"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 md:py-0 text-gray-800 hover:text-blue-600"
                onClick={handleLinkClick}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-5 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8">
          <b>Hennes617/</b>random_image
        </h1>

        <h2 className="text-2xl font-semibold mb-6">
          <b>API List</b>
        </h2>

        <ul className="space-y-12">
          {apiEntries.map((entry) => {
            const fullUrl = `https://random-image.woxly.de${entry.path}`;

            return (
              <li key={entry.path}>
                <h3 className="text-xl font-semibold mb-2">{entry.title}</h3>
                {entry.description && <p className="text-gray-700 mb-4">{entry.description}</p>}
                <div className="flex items-center space-x-4 mb-4">
                  <Link legacyBehavior href={entry.path}>
                    <a className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
                      Render Page
                    </a>
                  </Link>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <code className="text-gray-800">{fullUrl}</code>
                </div>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-5 text-center">
        &copy; {new Date().getFullYear()} woxly.de All rights reserved.
        <div className="mt-2">
          <Link legacyBehavior href="/">
            <a className="text-white hover:underline mx-2">Home</a>
          </Link>
          |
          <Link legacyBehavior href="/api-lists">
            <a className="text-white hover:underline mx-2">API List</a>
          </Link>
          |
          <a
            href="https://github.com/Hennes617/random_image"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline mx-2"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
