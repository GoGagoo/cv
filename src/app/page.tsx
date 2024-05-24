"use client"

import { CommandMenu } from "@/components/command-menu"
import { ProjectCard } from "@/components/project-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { RESUME_DATA } from "@/data/resume-data"
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Page() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("dark", !darkMode)
  }

  return (
    <main className={`${darkMode && "dark"}`}>
      <section className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 dark:bg-[#030712]">
        <div className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6 dark:bg-[#030712]">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <button
                onClick={toggleDarkMode}
                className="h-6 w-12 rounded-full bg-neutral-900 font-semibold text-white outline-none duration-200 animate-in hover:bg-neutral-300 active:bg-neutral-300 sm:right-16 sm:h-8 sm:w-14 dark:bg-slate-200 dark:text-black dark:hover:bg-neutral-300 dark:active:bg-neutral-300"
              >
                {darkMode ? "СВЛ" : "ТМН"}
              </button>
              <h1 className="text-2xl font-bold dark:text-slate-200">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {RESUME_DATA.summary}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="h-3 w-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-4 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="all 0.2s h-8 w-8 transition ease-in-out hover:-translate-y-2"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="all 0.2s h-8 w-8 transition ease-in-out hover:-translate-y-2"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="all 0.2s h-8 w-8 transition ease-in-out hover:-translate-y-2"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank">
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="h-28 w-28 max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 ">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          {/* <Section>
          <h2 className="text-xl font-bold">Опыт Работы</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            )
          })}
        </Section> */}
          <Section>
            <h2 className="text-xl font-bold dark:text-slate-200">Навыки</h2>
            <h2 className="text-md font-bold dark:text-slate-200">
              Hard Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.hard_skills.map((hard_skill) => {
                return <Badge key={hard_skill}>{hard_skill}</Badge>
              })}
            </div>
            <h2 className="text-md font-bold dark:text-slate-200">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.soft_skills.map((soft_skill) => {
                return <Badge key={soft_skill}>{soft_skill}</Badge>
              })}
            </div>
          </Section>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold dark:text-slate-200">Проекты</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
              {RESUME_DATA.projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                )
              })}
            </div>
          </Section>
          <Section>
            <h2 className="text-xl font-bold dark:text-slate-200">
              Образование
            </h2>
            {RESUME_DATA.education.map((education) => {
              return (
                <Card key={education.university}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <Link href={education.link}>
                        <h3 className="font-semibold leading-none hover:text-gray-500 hover:underline">
                          {education.university}
                        </h3>
                      </Link>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2">{education.degree}</CardContent>
                </Card>
              )
            })}
          </Section>
          <Section>
            <h2 className="text-xl font-bold dark:text-slate-200">Обо мне</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
          </Section>
        </div>

        <CommandMenu
          links={[
            {
              url: RESUME_DATA.portfolio,
              title: "Портфолио",
            },
            ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        />
      </section>
    </main>
  )
}
