export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  cgpa?: string;
  location: string;
  logo?: string;
}

export const education: EducationItem[] = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech",
    field: "Information Technology",
    duration: "2023 – Expected May 2027",
    cgpa: "7.7",
    location: "Chennai, India",
    logo: "/srm-logo.jpg",
  },
  {
    institution: "L M Dadha Senior Secondary School",
    degree: "Higher Secondary Education",
    field: "CBSE",
    duration: "Graduated 2023",
    location: "Chennai, India",
    logo: "/lmdadha-logo.png",
  },
];
