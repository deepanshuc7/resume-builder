import { useResumeStore } from "../store/resumeStore";

export function ResumePreview() {
  const personalDetails = useResumeStore(
    (state) => state.resume.personalDetails,
  );

  const summary = useResumeStore((state) => state.resume.summary);

  const experiences = useResumeStore((state) => state.resume.experience);

  const education = useResumeStore((state) => state.resume.education);

  return (
    <section aria-label="Resume preview">
      <header>
        <h1>{personalDetails.fullName}</h1>
        {personalDetails.jobTitle && <p>{personalDetails.jobTitle}</p>}
        <div>
          {personalDetails.email && <span>{personalDetails.email}</span>}
          {personalDetails.phone && <span>{personalDetails.phone}</span>}
          {personalDetails.location && <span>{personalDetails.location}</span>}
        </div>

        <div>
          {personalDetails.website && (
            <a href={personalDetails.website}>
              {personalDetails.website.replace(/^https?:\/\//, "")}
            </a>
          )}

          {personalDetails.linkedin && (
            <a href={personalDetails.linkedin}>{personalDetails.linkedin}</a>
          )}
        </div>
      </header>

      {summary && (
        <section>
          <h2>Profile</h2>
          <p>{summary}</p>
        </section>
      )}

      {experiences.map((experience) => (
        <article key={experience.id}>
          <h3>{experience.position}</h3>

          <p>{experience.company}</p>

          {experience.location && <p>{experience.location}</p>}

          {(experience.startDate ||
            experience.endDate ||
            experience.current) && (
            <p>
              {experience.startDate}

              {experience.startDate && " - "}

              {experience.current ? "Present" : experience.endDate}
            </p>
          )}
          {experience.description && <p>{experience.description}</p>}
        </article>
      ))}

      {education.length > 0 && (
        <section>
          <h2>Education</h2>
          {education.map((item) => (
            <article key={item.id}>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>

              {item.location && <p>{item.location}</p>}

              {(item.startDate || item.endDate) && (
                <p>
                  {item.startDate}
                  {item.startDate && item.endDate && " - "}

                  {item.endDate}
                </p>
              )}
            </article>
          ))}
        </section>
      )}
    </section>
  );
}
