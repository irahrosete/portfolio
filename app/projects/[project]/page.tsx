import { getProject } from "@/sanity/utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: {project: string}
}

const Project = async ({ params }: Props) => {
  const slug = params.project
  const project = await getProject(slug)
  return ( 
    <div className='max-w-3xl mx-auto py-20'>
      <header className='flex items-center justify-between'>
        <h1 className='bg-gradient-to-r 
          from-blue-300 
          to-blue-300 
          bg-clip-text 
          text-transparent
          text-5xl
          drop-shadow
          font-extrabold'>
          {project.title}
        </h1>
        <a href={project.url} 
          title='view project' 
          target='_blank' 
          rel='noopener noreferrer'
          className='bg-gray-100 rounded-lg text-gray-800 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-800 hover:text-gray-100 transition'  
        >
          View Project
        </a>
      </header>

      <div className='text-lg text-white-700 mt-5'>
        <PortableText value={project.description} />
      </div>

      <Image src={project.image} 
        alt={project.title}
        width={1920}
        height={1080}
        className='mt-10 border-2 border-white-500 object-cover rounded-lg' 
      />
    </div>
  )
}

export default Project