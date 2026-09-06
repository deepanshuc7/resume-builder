import { useResumeStore } from "../../store/resumeStore";

export function PersonalDetailsForm() {
  const personalDetails = useResumeStore(
    (state) => state.resume.personalDetails,
  );

  const updatePersonalDetails = useResumeStore(
    (state) => state.updatePersonalDetails,
  );

  return (
    <section>
      <h2>Personal Details</h2>

      <div>
        <label htmlFor="fullName">Full name</label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          value={personalDetails.fullName}
          onChange={(event) =>
            updatePersonalDetails({ fullName: event.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="jobTitle">Job title</label>

        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          value={personalDetails.jobTitle}
          onChange={(event) =>
            updatePersonalDetails({ jobTitle: event.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={personalDetails.email}
          onChange={(event) =>
            updatePersonalDetails({ email: event.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={personalDetails.phone}
          onChange={(event) =>
            updatePersonalDetails({ phone: event.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>

        <input
          id="location"
          type="text"
          value={personalDetails.location}
          onChange={(event) =>
            updatePersonalDetails({ location: event.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="website">Website</label>

        <input
          id="website"
          type="url"
          value={personalDetails.website}
          onChange={(event) =>
            updatePersonalDetails({ website: event.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="linkedin">LinkedIn</label>
        <input
          id="linkedin"
          type="url"
          value={personalDetails.linkedin}
          onChange={(event) =>
            updatePersonalDetails({ linkedin: event.target.value })
          }
        />
      </div>
    </section>
  );
}
