'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CopyIcon, CheckIcon } from 'lucide-react'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/dist/client/link'

const categories = [
  "nature-image",
  "natur-2000",
  "minecraft-memes",
  "night-sky",
  "skeleton-random-image",
  "studio-ghibli",
  "swag-wallpaper"
]

export default function EnhancedApiDocumentation() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
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
              <Link legacyBehavior href="/api-lists">
                <a
                  className="block py-2 md:py-0 text-gray-800 hover:text-blue-600 "
                  onClick={handleLinkClick}
                >
                  API List
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/docs">
                <a
                  className="block py-2 md:py-0 text-gray-800 hover:text-blue-600 font-bold"
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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
       
      <div className="container mx-auto px-4 mt-16">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Random Image API Documentation</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Discover a world of images at your fingertips</p>
        
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="w-full h-full justify-center mb-8">
            <TabsTrigger value="usage" className="text-lg px-6 py-3">Usage Guide</TabsTrigger>
            <TabsTrigger value="examples" className="text-lg px-6 py-3">Interactive Examples</TabsTrigger>
       
          </TabsList>
          
          <TabsContent value="usage">
            <Card>
              <CardHeader>
                <CardTitle>How to Use the API</CardTitle>
                <CardDescription>Follow these simple steps to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">API Endpoint</h3>
                <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center mb-6">
                  <code>https://random-image.woxly.de/api/{'{category}'}</code>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(`https://random-image.woxly.de/api/${selectedCategory}`)}>
                    {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                  </Button>
                </div>
                <h3 className="text-xl font-semibold mb-4">Available Categories</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category) => (
                    <Badge key={category} variant="secondary" className="text-sm py-1 px-3">
                      {category}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600">
                  Replace {'{category}'} in the API endpoint with one of the categories listed above to get a random image from that category.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="examples">
            <Card>
              <CardHeader>
                <CardTitle>Try It Out</CardTitle>
                <CardDescription>Select a category and test the API</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Select onValueChange={setSelectedCategory} defaultValue={selectedCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <h3 className="text-xl font-semibold mb-4">API call for {selectedCategory}</h3>
                <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center mb-6">
                  <code>https://random-image.woxly.de/api/{selectedCategory}</code>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(`https://random-image.woxly.de/api/${selectedCategory}`)}>
                    {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                  </Button>
                </div>
                <Button 
                  onClick={() => window.open(`https://random-image.woxly.de/api/${selectedCategory}`, '_blank')}
                  className="w-full"
                >
                  Test the API call
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          
        </Tabs>
      </div>
    </div>
    </>
  )
}