"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "@/content/portfolio";

const filters = [
  { id: "all", label: "All work" },
  { id: "academic", label: "Academic" },
  { id: "hackathon", label: "Hackathons" },
] as const;

type Filter = (typeof filters)[number]["id"];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((project) => filter === "all" || project.kind === filter);

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            type="button"
            key={item.id}
            className={filter === item.id ? "is-selected" : undefined}
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="project-list">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((project) => (
            <motion.article
              className="project-card"
              data-featured={project.kind === "academic"}
              key={project.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-card__top"><span>PROJECT / {project.number}</span><span>{project.period}</span></div>
              <div className="project-card__body">
                <div className="project-card__monogram" aria-hidden="true">{project.name.slice(0, 1)}</div>
                <div>
                  <p className="project-card__category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-card__role">{project.role}</p>
                  <p className="project-card__description">{project.description}</p>
                </div>
              </div>
              <div className="project-card__tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
