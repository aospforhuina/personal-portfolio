import Image from "next/image"

const skills = [
  "linux administration",
  "windows optimizion"
]

const timeline = [
  { period: "2022 — Now", role: "Independent Designer", place: "Freelance" }
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-8 text-sm text-muted-foreground">About</h2>

        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <div className="shrink-0">
            <div className="overflow-hidden rounded-lg border border-border/60 bg-muted">
              <Image
                src="/profile.png"
                alt="Portrait of The Poki999"
                width={200}
                height={240}
                className="h-60 w-full object-cover md:h-auto"
              />
            </div>
          </div>

          <div>
            <p className="text-pretty text-base leading-relaxed text-foreground">
              The Poki999
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
             personalized page for guest and me
            </p>

            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-wide text-muted-foreground">
                What I do
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border/70 bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-wide text-muted-foreground">
                Experience
              </h3>
              <ul className="mt-3 divide-y divide-border/60">
                {timeline.map((item) => (
                  <li
                    key={item.role}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.place}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
