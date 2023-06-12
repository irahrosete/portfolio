import { getProject } from "@/sanity/utils"

type Props = {
  params: {project: string}
}

const Project = async ({ params }: Props) => {
  const slug = params.project
  const project = await getProject(slug)
  return <div>{project.title}</div>
}

export default Project