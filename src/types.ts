export type Errors<T> = {
  [K in keyof T]?: string;
};

export type FieldsProps<T> = {
  values: T;
  errors?: Errors<T>;
  onChange: (values: T) => void;
};
