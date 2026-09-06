import type { Experience } from "../../types/resume";

interface ExperienceItemProps {
  experience: Experience;
  onUpdate: (id: string, experience: Partial<Experience>) => void;
  onRemove: (id: string) => void;
}

export function ExperienceItem({
  experience,
  onUpdate,
  onRemove,
}: ExperienceItemProps) {
  return (
    <fieldset>
      <legend>Work Experience</legend>

      <div>
        <label htmlFor={`company-${experience.id}`}>Company</label>

        <input
          id={`company-${experience.id}`}
          type="text"
          value={experience.company}
          onChange={(event) =>
            onUpdate(experience.id, { company: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor={`position-${experience.id}`}>Position</label>

        <input
          id={`position-${experience.id}`}
          type="text"
          value={experience.position}
          onChange={(event) =>
            onUpdate(experience.id, {
              position: event.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`location-${experience.id}`}>Location</label>

        <input
          id={`location-${experience.id}`}
          type="text"
          value={experience.location}
          onChange={(event) =>
            onUpdate(experience.id, {
              location: event.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`start-date-${experience.id}`}>Start date</label>

        <input
          id={`start-date-${experience.id}`}
          type="month"
          value={experience.startDate}
          onChange={(event) =>
            onUpdate(experience.id, {
              startDate: event.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`end-date-${experience.id}`}>End date</label>

        <input
          id={`end-date-${experience.id}`}
          type="month"
          value={experience.endDate}
          disabled={experience.current}
          onChange={(event) =>
            onUpdate(experience.id, {
              endDate: event.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`current-${experience.id}`}>
          Currently working here
        </label>

        <input
          id={`current-${experience.id}`}
          type="checkbox"
          checked={experience.current}
          onChange={(event) =>
            onUpdate(experience.id, {
              current: event.target.checked,
              endDate: event.target.checked ? "" : experience.endDate,
            })
          }
        />
      </div>

      <div>
        <label htmlFor={`description-${experience.id}`}>Description</label>

        <textarea
          id={`description-${experience.id}`}
          value={experience.description}
          onChange={(event) =>
            onUpdate(experience.id, {
              description: event.target.value,
            })
          }
        />
      </div>

      <button type="button" onClick={() => onRemove(experience.id)}>
        Remove experience
      </button>
    </fieldset>
  );
}
