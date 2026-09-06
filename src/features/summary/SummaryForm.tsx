import { useResumeStore } from "../../store/resumeStore";

const SummaryForm = () => {
  const summary = useResumeStore((state) => state.resume.summary);
  const updateSummary = useResumeStore((state) => state.updateSummary);
  return (
    <section>
      <h2>Professional Summary</h2>

      <label htmlFor="summary">Professional summary</label>

      <textarea
        id="summary"
        value={summary}
        onChange={(event) => updateSummary(event.target.value)}
        rows={6}
        placeholder="Write a short summary about your experience and strengths..."
      />
    </section>
  );
};

export default SummaryForm;
