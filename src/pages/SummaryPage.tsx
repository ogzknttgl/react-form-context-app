import { useFormData } from "../context/FormContext";
import { Link } from "react-router-dom";

const SummaryPage = () => {
  const { formData } = useFormData();

  return (
    <div style={{ padding: 24 }}>
      <h2>Özet Sayfası</h2>
      <p><strong>Ad:</strong> {formData.name}</p>
      <p><strong>Cinsiyet:</strong> {formData.gender}</p>
      <p><strong>Doğum Tarihi:</strong> {formData.birthDate}</p>
      <Link to="/form">← Geri Dön</Link>
    </div>
  );
};

export default SummaryPage;
