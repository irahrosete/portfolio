import { Project } from '@/types/Project'
import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient(clientConfig)

  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      category,
      year,
      deliverables,
      techstack,
      tools,
      'image': image.asset -> url,
      url,
      github,
      figma,
      description
    }`
  )
}

export const getProject = async (slug: string): Promise<Project> => {
  const client = createClient(clientConfig)

  return client.fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      category,
      year,
      deliverables,
      techstack,
      tools,
      'image': image.asset -> url,
      url,
      github,
      figma,
      description
    }`,
    { slug }
  )
} 