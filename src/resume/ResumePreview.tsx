import { useResumeStore } from "../store/resumeStore";

export function ResumePreview() {
  const personalDetails = useResumeStore(
    (state) => state.resume.personalDetails,
  );

  const summary = useResumeStore((state) => state.resume.summary)

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
