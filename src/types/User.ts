export type Follower = {
  userId: string;
};

export type Following = {
  userId: string;
};

export type Skill = {
  id: string;
  name: string;
  experience: number;
};

export type Language = {
  id: string;
  name: string;
  level:
    | "pre intermediate"
    | "intermediate"
    | "upper intermediate"
    | "native speaker";
};

export type Education = {
  id: string;
  name: string;
  specialization: string;
  startData: Date;
  endDate: Date;
  city: string;
};

export type User = {
  username: string;
  email: string;
  status: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: Array<Follower>;
  followings: Array<Following>;
  isAdmin: boolean;
  desc: string;
  city: string;
  from: string;
  relationship: 1 | 2 | 3;
  position: string;
  skills: Array<Skill>;
  languages: Array<Language>;
  educations: Array<Education>;
  about: string;
};
