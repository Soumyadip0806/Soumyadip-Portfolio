import {PiGraduationCapDuotone} from 'react-icons/pi'
import {PiSuitcaseSimpleBold} from 'react-icons/pi'





export const QualificationData = [


    {
        id : 1,
        category : 'Education',
        title : 'Master of Science (M.Sc)',
        universityName: 'Rani Rashmoni Green University',
        subject : 'COMPUTER SCIENCE (Specialization : AI, ML, Deep Learning)',
        year : 2024,
        cgpa : 'CGPA : 8.83',
    },
    {
        id : 2,
        category : 'Education',
        title : 'Bachelor of Science (B.Sc)',
        instituteName : 'AKPC Mahavidyalaya',
        universityName: 'The University of Burdwan',
        subject : 'PHYSICS',
        year : 2022,
        cgpa : 'CGPA : 9.2',
    },
    {
        id : 3,
        category : 'Education',
        title : 'Higher Secondary',
        universityName: 'Bajua High School (H.S.)',
        subject : 'Physics, Mathematics, and Chemistry',
        year : 2019,
        cgpa :'CGPA : 7.26',
    },
    
    {
        id : 4,
        category : 'Education',
        title : 'Madhyamik (Secondary)',
        universityName: 'Bajua High School (H.S.)',
        subject : '',
        year : 2017,
        cgpa : 'CGPA : 8.47',
    },
    {
        id : 5,
        category : 'Experience',
        title : 'Web Application Development',
        instituteName: '',
        universityName: 'HTML, CSS, JavaScript, React Js, SQL',
        subject : 'ui/ux, backend',
        year : '2022 - ',
        cgpa : '1.5+ Years of Experience',
    },
    {
        id : 6,
        category : 'Experience',
        title : 'Data Analysis & Data Science',
        instituteName: '',
        universityName: 'Data Analysis, Data Pre-processing, Data Visualization ',
        subject : '',
        year : '2023 - ',
        cgpa : '1+ Years of Experience',
    },
    {
        id : 7,
        category : 'Experience',
        title : 'Computational Physics',
        instituteName: 'A.K.P.C Mahavidyalaya',
        universityName: 'Scilab, Quantum Computational Physics, Graphic Visualization Tools',
        subject : '',
        year : '2019-2022',
        cgpa : '3 Years of Experience',
    },


];



export const QualificationNavList =[

    {
        name : 'Education',
        icon: <PiGraduationCapDuotone/>,
    },
    {
        name : 'Experience',
        icon : <PiSuitcaseSimpleBold/>,
    },
];