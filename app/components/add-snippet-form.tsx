import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface AddSnippetFormProps {
  onSubmit: (snippet: { title: string; code: string; language: string; tags: string[] }) => void
  onCancel: () => void
}

export default function AddSnippetForm({ onSubmit, onCancel }: AddSnippetFormProps) {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('')
  const [tags, setTags] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      title,
      code,
      language,
      tags: tags.split(',').map(tag => tag.trim())
    })
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add New Snippet</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="code" className="text-sm font-medium">Code</label>
            <Textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              rows={5}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="language" className="text-sm font-medium">Language</label>
            <Input
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="tags" className="text-sm font-medium">Tags (comma-separated)</label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          <Button type="submit">Add Snippet</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

