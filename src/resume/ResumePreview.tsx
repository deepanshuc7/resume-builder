import { useResumeStore } from "../store/resumeStore";

export function ResumePreview() {
  const personalDetails = useResumeStore(
    (state) => state.resume.personalDetails,
  );

  const summary = useResumeStore((state) => state.resume.summary)

  const experiences = useResumeStore((state) => state.resume.experience)

  return (
    <section aria-label="Resume preview">
      <header>
    
        <h1>{personalDetails.fullName}</h1>
        <p>{personalDetails.jobTitle}</p>

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

                {experience.location && (
                    <p>{experience.location}</p>
                )}

                {(experience.startDate || experience.endDate || experience.current) && (
                    <p>
                        {experience.startDate}

                        {experience.startDate && ' - '}

                        {experience.current ? 'Present' : experience.endDate}
                    </p>
                )}
                {experience.description && (
                    <p>{experience.description}</p>
                )}
            </article>
        ))}

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
    </section>
  );
}
