import { Button } from "antd";
import { useFormData } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import GenericInput from "../components/GenericInput";
import type { FormField } from "../models/FormTypes";


const fields: FormField[] = [
  {
    name: "name",
    label: "Ad",
    type: "text",
  },
  {
    name: "gender",
    label: "Cinsiyet",
    type: "select",
    options: [
      { label: "Erkek", value: "male" },
      { label: "Kadın", value: "female" },
    ],
  },
  {
    name: "birthDate",
    label: "Doğum Tarihi",
    type: "date",
  },
];

const FormPage = () => {
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 24 }}>
      <h2>Form Sayfası</h2>

      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: 16 }}>
          <GenericInput
            field={field}
            value={formData[field.name]}
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, [field.name]: val }))
            }
          />
        </div>
      ))}

      <Button type="primary" onClick={() => navigate("/summary")}>
        Devam Et
      </Button>
    </div>
  );
};

export default FormPage;
