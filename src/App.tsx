import { PersonalDetailsForm } from "./features/personal-details/PersonalDetailsForm";
import { ResumePreview } from "./resume/ResumePreview";

function App() {
  return (
    <main>
      <h1>Resume Builder</h1>

      <div>
        <PersonalDetailsForm />
        
        <ResumePreview />
      </div>
    </main>
  );
}

export default App;
