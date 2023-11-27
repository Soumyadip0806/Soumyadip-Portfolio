
import ExamAnxiety from '../images/examAnxiety.png';
import MyPortfolio from '../images/my-portfolio.jpg';
import Ecommerce1 from '../images/e-commerce1.jpg';


const ProjectData = [


  {
    id:1,
    name: 'Exam Anxiety Prediction',
    class:'detailProject_top blue2',
    type:'Machine Learning Project website',
    desc:'This is an Machine Learning Model based Exam/Test Anxiety checking website, Where you can check if you have Exam/Test anxietyor not.',
    img: ExamAnxiety,
    date:'23.11.2023',
    client: 'Own',
    githubLink:"https://github.com/Soumyadip0806/Student-s-Exam-Anxiety-Prediction",
    liveLink:"",
    mainStack:['React JS ','Flask ','Machine Learning ','Multi Layer Perceptron','Node.js ','Python '],
  },
  {
    id:2,
    name: 'My Portfolio',
    class:'detailProject_top blue1',
    type:'Portfolio Website',
    desc:'This is my own portfolio website, where you can see my resume in Web Format. Here I used React frontend framework to create this website.',
    img: MyPortfolio,
    date:'27.11.2023',
    client: 'Own',
    githubLink:"",
    liveLink:"",
    mainStack:['React JS','Node.js','Email.js', 'Swipper.js'],
  },
  {
    id:3,
    name: 'E-Commerce',
    class:'detailProject_top blue3',
    type:'Business Website',
    desc:'This is an Ecommerce website. Here you can login (Block-chain based Authentication) and view the product, and also you can buy and pay.',
    img: Ecommerce1,
    date:'Ongoing',
    client: 'Own',
    githubLink:"",
    liveLink:"",
    mainStack:['Block-Chain','React JS','Node.js'],
  },

];


export default ProjectData;