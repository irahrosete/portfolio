import { Project } from '@/types/Project'
import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'
import { Page } from '@/types/Page'

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

export const getPages = async (): Promise<Page[]> => {
  const client = createClient(clientConfig)

  return client.fetch(
    groq`*[_type == 'page']{
      _id,
      _createdAt,
      title,
      'slug': slug.current
    }`
  )
}

export const getPage = async (slug: string): Promise<Page> => {
  const client = createClient(clientConfig)

  return client.fetch(
    groq`*[_type == 'page' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      content
    }`,
    { slug }
  )
}