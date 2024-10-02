'use client'

import { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from "@/components/ui/button"

const jsonFiles = [
  { name: 'Natur 2000', path: '/lists/natur-2000.json' },
  { name: 'List 2', path: '/lists/list-2.json' },
  { name: 'List 3', path: '/lists/list-3.json' },
  { name: 'List 4', path: '/lists/list-4.json' },
]

export function PageComponent() {
  const [selectedFile, setSelectedFile] = useState(jsonFiles[0])
  const [jsonContent, setJsonContent] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchJsonContent(selectedFile.path)
  }, [selectedFile])

  const fetchJsonContent = (filePath: string) => {
    setJsonContent('')
    setError('')
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch JSON file')
        }
        return response.json()
      })
      .then(data => {
        setJsonContent(JSON.stringify(data, null, 2))
      })
      .catch(err => {
        setError(`Error fetching JSON data: ${err.message}`)
      })
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">JSON File Viewer</h1>
      <div className="mb-4 flex flex-wrap gap-2">
        {jsonFiles.map((file) => (
          <Button
            key={file.path}
            onClick={() => setSelectedFile(file)}
            variant={selectedFile.path === file.path ? "default" : "outline"}
          >
            {file.name}
          </Button>
        ))}
      </div>
      {error ? (
        <p className="text-red-500 mb-4">{error}</p>
      ) : jsonContent ? (
        <div className="border rounded overflow-auto max-h-[calc(100vh-200px)]">
          <SyntaxHighlighter language="json" style={tomorrow}>
            {jsonContent}
          </SyntaxHighlighter>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}