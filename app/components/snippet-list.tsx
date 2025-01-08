import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Snippet {
  id: number
  title: string
  code: string
  language: string
  tags: string[]
}

interface SnippetListProps {
  snippets: Snippet[]
}

export default function SnippetList({ snippets }: SnippetListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {snippets.map((snippet) => (
        <Card key={snippet.id}>
          <CardHeader>
            <CardTitle>{snippet.title}</CardTitle>
            <CardDescription>Language: {snippet.language}</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto">
              <code>{snippet.code}</code>
            </pre>
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-2">
              {snippet.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

