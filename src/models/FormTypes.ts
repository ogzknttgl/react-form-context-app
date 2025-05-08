export type InputType = "text" | "select" | "date";

export interface FormField {
  name: keyof FormDataType;
  label: string;
  type: InputType;
  options?: { label: string; value: string }[]; // sadece select için
}

export type FormDataType = {
  name: string;
  gender: string | null;
  birthDate: string | null;
};
