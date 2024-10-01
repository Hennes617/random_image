// pages/api-list.tsx
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

export default function ApiList() {
  // Zustand für das Mobile Menü
  const [menuOpen, setMenuOpen] = useState(false);

  // Schließt das mobile Menü nach Klick auf einen Link
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Random Image API List</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Liste der verfügbaren Random Image APIs von Woxly.de" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-95 shadow z-50">
        <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
          <Link legacyBehavior href="/">
            <a className="text-2xl font-semibold text-blue-600">Woxly.de</a>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Menü umschalten"
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
              <Link legacyBehavior href="/api-list">
                <a
                  className="block py-2 md:py-0 text-gray-800 hover:text-blue-600 font-semibold"
                  onClick={handleLinkClick}
                >
                  API List
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

      {/* Hauptinhalt */}
      <main className="pt-24 pb-12 px-5 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8">
          <b>Hennes617/</b>random_image
        </h1>

        <h2 className="text-2xl font-semibold mb-6">
          <b>APIs List:</b>
        </h2>

        <ul className="space-y-12">
          {/* Example Images */}
          <li>
            <h3 className="text-xl font-semibold mb-2">Example Images</h3>
            <p className="text-gray-700 mb-4">
              A set of example images to showcase how this tool works.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Link legacyBehavior href="/api/random-image">
                <a className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
                  Render Page
                </a>
              </Link>
              
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <code className="text-gray-800">
                  https://random-image.woxly.de/api/random-image
              </code>
            </div>
     
          </li>

          {/* Skeleton Images */}
          <li>
            <h3 className="text-xl font-semibold mb-2">Skeleton Images</h3>
            <p className="text-gray-700 mb-4">
              A collection of skeleton-themed images, suitable for all audiences.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Link legacyBehavior href="/api/skeleton-random-image">
                <a className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
                  Render Page
                </a>
              </Link>
              
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <code className="text-gray-800">
                https://random-image.woxly.de/api/skeleton-random-image
              </code>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
             
            </div>
          </li>
{/* studio-ghibli */}
          <li>
            <h3 className="text-xl font-semibold mb-2">Studio Ghibli</h3>
            <p className="text-gray-700 mb-4">
              A collection of skeleton-themed images, suitable for all audiences.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Link legacyBehavior href="/api/studio-ghibli">
                <a className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
                  Render Page
                </a>
              </Link>
              
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <code className="text-gray-800">
                https://random-image.woxly.de/api/studio-ghibli
              </code>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
             
            </div>
          </li>
          {/* Swag Wallpapers */}
          <li>
            <h3 className="text-xl font-semibold mb-2">Swag Wallpapers</h3>
            <p className="text-gray-700 mb-4">
              These wallpapers are stylish and ready for you to use.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Link legacyBehavior href="/api/swag-wallpaper">
                <a className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
                  Render Page
                </a>
              </Link>
              
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <code className="text-gray-800">
                  https://random-image.woxly.de/api/swag-wallpaper
              </code>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           
             
            </div>
          </li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-5 text-center">
        &copy; {new Date().getFullYear()} woxly.de Alle Rechte vorbehalten.
        <div className="mt-2">
          <Link legacyBehavior href="/">
            <a className="text-white hover:underline mx-2">Home</a>
          </Link>
          |
          <Link legacyBehavior href="/api-list">
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
