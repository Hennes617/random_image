// pages/index.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowUp, FaBars } from 'react-icons/fa';

export default function Home() {
  // Zustand für das Mobile Menü
  const [menuOpen, setMenuOpen] = useState(false);

  // Funktion zum Scrollen nach oben
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Zustand für den Scroll-Button
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Event Listener für Scroll
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Schließt das mobile Menü nach Klick auf einen Link
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Random Image von Woxly.de</title>
        <meta name="description" content="Entdecke zufällige Bilder auf Woxly.de" />
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
                  className="block py-2 md:py-0 text-gray-800 hover:text-blue-600"
                  onClick={handleLinkClick}
                >
                  API
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

      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center h-screen bg-cover bg-center relative text-center"
        style={{ backgroundImage: 'url(/api/random-image)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-xl text-white px-5">
          <h1 className="text-5xl font-bold mb-5">Our API for random images</h1>
          <p className="text-xl mb-10">
            The API shows the user every time they reload the page a random image.
          </p>
          <Link legacyBehavior href="#api">
            <a className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
              Docs
            </a>
          </Link>
        </div>
      </section>

      {/* Abschnitt 1 */}
      <section id="api" className="flex flex-wrap items-center justify-center py-20 px-5 bg-white">
        <div className="max-w-lg mx-5">
          <h2 className="text-4xl font-semibold mb-5">The API.</h2>
          <p className="text-lg text-gray-700 mb-5">
            The API shows the user every time they reload the page a random image.
          </p>
         
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
          >
           Reload
          </button>
        </div>
        <div className="max-w-lg mx-5 mt-10 md:mt-0">
          <Image
            src="/api/random-image"
            alt="Zufälliges Bild"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Abschnitt 2 */}
      <section className="flex flex-wrap items-center justify-center py-20 px-5 bg-white">
        <div className="max-w-lg mx-5 mt-10 md:mt-0">
          <p className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <code>
              {`<!-- MARKDOWN: -->
![Random image](https://random-image.woxly.de/api/random-image)
<!-- HTML: -->
<img alt="Random image" src="https://random-image.woxly.de/api/random-image">`}
            </code>
          </p>
        </div>
        <div className="max-w-lg mx-5">
          <h2 className="text-4xl font-semibold mb-5">Documentation</h2>
          <p className="text-lg text-gray-700 mb-5">
            
            The main feature of this site is the API, which allows you to create a random image almost anywhere on the web.
          </p>
          <p className="text-lg text-gray-700 mb-5">You can use this API in the following ways:</p>
        </div>
      </section>

      {/* Abschnitt 3 */}
      <section id="uses" className="flex flex-wrap items-center justify-center py-20 px-5 bg-white">
        <div className="max-w-lg mx-5">
          <h2 className="text-4xl font-semibold mb-5">Usecases</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-3">
              Image of the day websites.
            </li>
            <li className="mb-3">Random app background.</li>
            <li className="mb-3">
              Random MEMES.
            </li>
          </ul>
        </div>
        <div className="max-w-lg mx-5 mt-10 md:mt-0">
          <Image
            src="/api/random-image"
            alt="Anwendungsfälle"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-5 text-center">
        &copy; {new Date().getFullYear()} woxly.de Alle Rechte vorbehalten.
        <div className="mt-2">
          <Link legacyBehavior href="#home">
            <a className="text-white hover:underline mx-2">Home</a>
          </Link>
          |
          <Link legacyBehavior href="#api">
            <a className="text-white hover:underline mx-2">API</a>
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

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          aria-label="Nach oben scrollen"
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full hover:bg-blue-800 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
