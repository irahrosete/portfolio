import { Project } from '@/types/Project'
import { createClient, groq } from 'next-sanity'

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECTID}`,
    dataset: 'production',
    apiVersion: '2023-06-11'
  })

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