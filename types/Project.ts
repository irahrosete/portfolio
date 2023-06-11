import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  category: string
  year: string
  deliverables: string
  techstack: string
  tools: string
  image: string
  url: string
  github: string
  figma: string
  description: PortableTextBlock[]
}