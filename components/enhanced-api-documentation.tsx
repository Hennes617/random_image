'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CopyIcon, CheckIcon } from 'lucide-react'

const categories = [
  "nature",
  "nature-2000",
  "minecraftmemes",
  "nightsky",
  "skeletonmemes",
  "ghibli",
  "swag"
]

export function EnhancedApiDocumentationComponent() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Random Image API Documentation</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Discover a world of images at your fingertips</p>
        
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="w-full justify-center mb-8">
            <TabsTrigger value="usage" className="text-lg px-6 py-3">Usage Guide</TabsTrigger>
            <TabsTrigger value="examples" className="text-lg px-6 py-3">Interactive Examples</TabsTrigger>
            <TabsTrigger value="response" className="text-lg px-6 py-3">Response Format</TabsTrigger>
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
                  <code>https://random-images.woxly.de/api/{'{category}'}</code>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(`https://random-images.woxly.de/api/${selectedCategory}`)}>
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
                  <code>https://random-images.woxly.de/api/{selectedCategory}</code>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(`https://random-images.woxly.de/api/${selectedCategory}`)}>
                    {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                  </Button>
                </div>
                <Button 
                  onClick={() => window.open(`https://random-images.woxly.de/api/${selectedCategory}`, '_blank')}
                  className="w-full"
                >
                  Test the API call
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="response">
            <Card>
              <CardHeader>
                <CardTitle>Response Format</CardTitle>
                <CardDescription>Understanding the API response</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Successful Response</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
{`{
  "url": "https://example.com/path/to/random/image.jpg"
}`}
                </pre>
                <h3 className="text-xl font-semibold mb-4">Error Handling</h3>
                <p className="text-gray-600 mb-4">
                  In case of an error, the API will return an appropriate HTTP status code along with an error message in the following format:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
{`{
  "error": "Error message describing the issue"
}`}
                </pre>
                <h3 className="text-xl font-semibold mb-4">Usage Limitations</h3>
                <p className="text-gray-600">
                  Please be aware of any usage restrictions or rate limits for the API. For more detailed information about usage limitations, please contact the API provider.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}