
export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "User Management Dashboard",
    description:
      "A responsive React application featuring user search, filtering, sorting, pagination, favorites, and API integration.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
    ],
    image: "/projects/peoplehub.png",
    github:
      "https://github.com/sourav021205/user-management-dashboard",
    demo:
      "https://user-management-dashboard-nu-umber.vercel.app/",
  },
  {
    id: 2,
    title: "Logistics Intelligence",
    description:
      "A logistics analytics pipeline for processing shipment data, analyzing delivery delays, and predicting potential delays using machine learning.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Power BI",
    ],
    image: "/projects/logistics.png",
    github:
      "https://github.com/sourav021205/Big-Data-Logistic-Intelligence",
    demo: "",
  },
  {
    id: 3,
    title: "Precision Crop Forecast Pro",
    description:
      "A machine learning application for recommending crops and predicting crop yields using agricultural and environmental data.",
    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
    ],
    image: "/projects/crop.png",
    github:
      "https://github.com/sourav021205/Crop-Idntification",
    demo: "",
  },
];
