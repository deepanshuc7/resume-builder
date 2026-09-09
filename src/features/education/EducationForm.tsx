import { useResumeStore } from '../../store/resumeStore'
import { EducationItem } from './EducationItem'

export function EducationForm() {
  const education = useResumeStore(
    (state) => state.resume.education,
  )

  const addEducation = useResumeStore(
    (state) => state.addEducation,
  )

  const updateEducation = useResumeStore(
    (state) => state.updateEducation,
  )

  const removeEducation = useResumeStore(
    (state) => state.removeEducation,
  )

  return (
    <section>
      <h2>Education</h2>

      {education.map((item) => (
        <EducationItem
          key={item.id}
          education={item}
          onUpdate={updateEducation}
          onRemove={removeEducation}
        />
      ))}

      <button
        type="button"
        onClick={addEducation}
      >
        Add education
      </button>
    </section>
  )
}