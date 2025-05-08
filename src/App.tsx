import { Routes, Route, Navigate } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import FormPage from "./pages/FormPage";
import SummaryPage from "./pages/SummaryPage";

const App = () => (
  <FormProvider>
    <Routes>
      <Route path="/" element={<Navigate to="/form" />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </Routes>
  </FormProvider>
);

export default App;
