export type TeamMemberType = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
};

export type TeamType = {
  [row: string]: TeamMemberType;
};
