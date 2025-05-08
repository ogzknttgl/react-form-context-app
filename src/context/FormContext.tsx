import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


type FormDataType = {
  name: string;
  gender: string | null;
  birthDate: string | null;
};

const FormContext = createContext<{
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
} | null>(null);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    gender: null,
    birthDate: null,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormData must be used within FormProvider");
  return context;
};
