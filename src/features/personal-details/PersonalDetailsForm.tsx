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
    </section>
  );
}
