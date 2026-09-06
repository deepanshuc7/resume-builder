import { PersonalDetailsForm } from "./features/personal-details/PersonalDetailsForm";
import SummaryForm from "./features/summary/SummaryForm";
import { ResumePreview } from "./resume/ResumePreview";

function App() {
  return (
    <main>
      <h1>Resume Builder</h1>

      <div>
        <div>
          <PersonalDetailsForm />
          <SummaryForm />
        </div>

        <ResumePreview />
      </div>
    </main>
  );
}

export default App;
