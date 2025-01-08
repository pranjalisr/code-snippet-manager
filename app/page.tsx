'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import AddSnippetForm from './components/add-snippet-form'
import SnippetList from './components/snippet-list'

interface Snippet {
  id: number
  title: string
  code: string
  language: string
  tags: string[]
}

export default function Home() {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
    }
    // In a real app, you would fetch snippets from an API here
    setSnippets([
      { id: 1, title: 'React useEffect', code: 'useEffect(() => {\n  // Your effect here\n}, []);', language: 'javascript', tags: ['react', 'hooks'] },
      { id: 2, title: 'Python List Comprehension', code: 'numbers = [x for x in range(10)]', language: 'python', tags: ['python', 'list'] },
    ])
  }, [router])

  const handleAddSnippet = (newSnippet: Omit<Snippet, 'id'>) => {
    setSnippets([...snippets, { ...newSnippet, id: snippets.length + 1 }])
    setShowAddForm(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/login')
  }

  const filteredSnippets = snippets.filter(snippet =>
    snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Code Snippet Manager</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="mb-4 flex space-x-2">
        <Input
          type="text"
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={() => setShowAddForm(true)}>Add New Snippet</Button>
      </div>
      {showAddForm && <AddSnippetForm onSubmit={handleAddSnippet} onCancel={() => setShowAddForm(false)} />}
      <SnippetList snippets={filteredSnippets} />
    </div>
  )
}

