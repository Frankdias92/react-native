import { MaterialIcons } from "@expo/vector-icons"

type Category = {
  id: string
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  { id: '1', name: 'Code', icon: 'code' },
  { id: '2', name: 'Project', icon: 'code' },
  { id: '3', name: 'Website', icon: 'language' },
  { id: '4', name: 'Article', icon: 'newspaper' },
  { id: '5', name: 'Video', icon: 'movie' },
  { id: '6', name: 'Document', icon: 'content-paste' },
]