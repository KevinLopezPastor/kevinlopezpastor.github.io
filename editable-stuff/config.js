// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kevin",
  middleName: "Lopez",
  lastName: "Pastor",
  message: "Especialista en Ciencia de Datos y Machine Learning",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/KevinLopezPastor",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kevinlopezpastor/",
    },
    //{
    //  image: "fa-facebook",
    //  url: "https://www.facebook.com/hashirshoaeb",
    //},
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kevin.lopezp/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/KevinArnueld/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Sobre mí",
  imageLink: "",
  imageSize: 250,
  message:
    "Ingeniero Industrial titulado con experiencia en proyectos de mejora de procesos y ciencia de datos en organizaciones no gubernamentales. Participo activamente en eventos como Hackatones, Datatones y voluntariados fortaleciendo mis habilidades en Python, R, Power BI, Tableau y SQL.",
  resume: "https://drive.google.com/file/d/1bctm7bndpk8pd_chaI3H16ewAKOmuNea/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
//import { image_urls } from "./ruta_al_archivo/config"; // Ajusta la ruta según tu estructura de carpetas

//const repos = {
//  show: true,
//  heading: "Proyectos Destacados",
//  gitHubUsername: "KevinLopezPastor", //i.e."johnDoe12Gh"
//  reposLength: 4,
//  specificRepos: [],
//};

const repos = {
  show: true,
  heading: "Proyectos Destacados",
  gitHubUsername: "KevinLopezPastor",
  reposLength: 4,
  specificRepos: [],//"Machine-Learning-Projects"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Habilidades",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "R", value: 80 },
    { name: "SQL", value: 90 },
    { name: "C/C++", value: 70 },
    { name: "VBA", value: 90 },
    { name: "Power BI", value: 100 },
    { name: "Tableau", value: 90 },
    { name: "SAP", value: 80 },
  ],
  softSkills: [
    { name: "Liderazgo", value: 80 },
    { name: "Trabajo en equipo", value: 90 },
    { name: "Adaptabilidad", value: 75 },
    { name: "Enfocado a resultados", value: 85 },
    { name: "Resolución de problemas", value: 75 },
    { name: "Empatía", value: 90 },
    { name: "Organización", value: 70 },
    { name: "Creatividad", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Mantente en Contacto",
  message:
    "Si requieres alguna información o consulta sobre Ciencia de Datos y Machine Learning, por favor no dudes en contactarme conmigo al correo",
  email: "kevinlopez.ind@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiencias",
  data: [
    {
      role: 'Especialista en Ciencia de Datos y Procesos',// Here Add Company Name
      companylogo: require('../assets/img/nicmaish1.png'),
      date: 'Abril 2023 – Presente',
    },
    {
      role: 'Especialista en Procesos y Mantenimiento',
      companylogo: require('../assets/img/autonort1.png'),
      date: 'Enero 2018 – Diciembre 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

// Ejemplo de cómo podrías tener las URLs de las imágenes en tu archivo de configuración
const image_urls = {
  projectName1: require("../editable-stuff/hashirshoaeb.png"),
  projectName2: require("../editable-stuff/hashirshoaeb.png"),
  // Agrega más URLs según sea necesario
};


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, image_urls };
