import { useResumeStore } from "../../store/resumeStore";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceForm() {
    const experiences = useResumeStore((state) => state.resume.experience)

    const addExperience = useResumeStore((state) => state.addExperience)

    const updateExperience = useResumeStore((state) => state.updateExperience)

    const removeExperience = useResumeStore((state) => state.removeExperience)

    return (
        <section>
            <h2>Work Experience</h2>

            {experiences.map((experience) => (
                <ExperienceItem key={experience.id}
                experience={experience}
                onUpdate={updateExperience}
                onRemove={removeExperience} />
            ))}

            <button type="button" onClick={addExperience}>Add experience</button>
        </section>
    )
}

