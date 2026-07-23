import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  href?: string
}

const projects: Project[] = [
  {
    title: "The Poki999",
    description: "useful ahk and bash scripts for personal project",
    image: "/project-1.png",
    tags: ["유용한 스크립트 모음집"],
    href: "https://github.com/aospforhuina/scripts",
  },
  {
    title: "what's next",
    description: "i'll add some projects on future.. so please wait.",
    image: "/project-2.png",
    tags: ["2026", "future",],
    href: "https://github.com/aospforhuina/",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-8 text-sm text-muted-foreground">Selected work</h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href || "#"}
              className="group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="overflow-hidden rounded-lg border border-border/60 bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project preview`}
                  width={640}
                  height={420}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <h3 className="mt-4 text-base font-medium text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border/70 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

