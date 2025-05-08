import { Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import type { FormField, FormDataType } from "../models/FormTypes";


type Props = {
  field: FormField;
  value: FormDataType[keyof FormDataType];
  onChange: (value: any) => void;
};

const GenericInput = ({ field, value, onChange }: Props) => {
  switch (field.type) {
    case "text":
      return (
        <Input
          placeholder={field.label}
          value={value as string}
          onChange={(e) => onChange(e.target.value)}
        />
      );

    case "select":
      return (
        <Select
          placeholder={field.label}
          value={value as string}
          onChange={(val) => onChange(val)}
          options={field.options}
          allowClear
        />
      );

    case "date":
      return (
        <DatePicker
          style={{ width: "100%" }}
          placeholder={field.label}
          value={value ? dayjs(value as string) : null}
          onChange={(date) => onChange(date ? date.toISOString() : null)}
        />
      );

    default:
      return null;
  }
};

export default GenericInput;
