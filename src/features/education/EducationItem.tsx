import type { Education } from '../../types/resume'

interface EducationItemProps {
  education: Education
  onUpdate: (
    id: string,
    education: Partial<Education>,
  ) => void
  onRemove: (id: string) => void
}

export function EducationItem({
  education,
  onUpdate,
  onRemove,
}: EducationItemProps) {
  return (
    <fieldset>
      <legend>Education</legend>

      <div>
        <label htmlFor={`institution-${education.id}`}>
          Institution
        </label>

        <input
          id={`institution-${education.id}`}
          type="text"
          value={education.institution}
          onChange={(event) =>
            onUpdate(education.id, {
              institution: event.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`degree-${education.id}`}>
          Degree
        </label>

        <input
          id={`degree-${education.id}`}
          type="text"
          value={education.degree}
          onChange={(event) =>
            onUpdate(education.id, {
              degree: event.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`education-location-${education.id}`}>
          Location
        </label>

        <input
          id={`education-location-${education.id}`}
          type="text"
          value={education.location}
          onChange={(event) =>
            onUpdate(education.id, {
              location: event.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`education-start-${education.id}`}>
          Start date
        </label>

        <input
          id={`education-start-${education.id}`}
          type="month"
          value={education.startDate}
          onChange={(event) =>
            onUpdate(education.id, {
              startDate: event.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`education-end-${education.id}`}>
          End date
        </label>

        <input
          id={`education-end-${education.id}`}
          type="month"
          value={education.endDate}
          onChange={(event) =>
            onUpdate(education.id, {
              endDate: event.target.value,
            })
          }
        />
      </div>

      <button
        type="button"
        onClick={() => onRemove(education.id)}
      >
        Remove education
      </button>
    </fieldset>
  )
}