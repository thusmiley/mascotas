export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export interface OptionProps {
  title: string;
  value: string;
}
export interface BreedFilterProps {
  title: string;
  options: OptionProps[];
}
