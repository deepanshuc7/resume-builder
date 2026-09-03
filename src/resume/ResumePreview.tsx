import { useResumeStore } from "../store/resumeStore";

export function ResumePreview() {
    const personalDetails = useResumeStore((state) => state.resume.personalDetails)

    return (
        <section aria-label="Resume preview">
            <h1>{personalDetails.fullName}</h1>

            <p>{personalDetails.jobTitle}</p>
        </section>
    )
}