import {HiOutlineCheckBadge} from 'react-icons/hi2';
import {BsTelephone} from 'react-icons/bs';
import {CiMapPin, CiMedicalCross} from 'react-icons/ci';
import {RxMagicWand} from 'react-icons/rx';
import facial from './assets/facial.jpg';
import massage from './assets/massage.jpg';
import lashes from './assets/lashes.jpg';
import microblading from './assets/microblading.jpg';
import nails from './assets/nails.jpg';
import mass from './assets/mass.jpg';
import pmu from './assets/pmu.webp';
import salInt from './assets/salon_interior.jpg';
import thera from './assets/thera.jpg';
import { AiOutlineProfile } from 'react-icons/ai';


export const aboutIcons  = [
    {
        id: 1,
        icon: <HiOutlineCheckBadge/>,
        legend: 'Specialistes certifiés',
    },
    {
        id: 2,
        icon: <AiOutlineProfile/>,
        legend: "+15ans d'expérience",
    },
    {
        id: 3,
        icon: <CiMedicalCross/>,
        legend: 'Traitement Médical',
    },
    {
        id: 4,
        icon: <RxMagicWand/>,
        legend: 'Design personnalisé',
    },
]

export const services = [
    {
        id:1,
        photo: nails,
        name: "Onglerie",
        description: ["Nail Art " ,"Traitement médical " ,  " Gel / VP "],
    },
    {
        id:2,
        photo:microblading,
        name: "PMU",
        description: ["Microblading ", "Microshading ", "Mixte "],
    },
    {
        id:3,
        photo:facial,
        name: "Soins",
        description: ["Soin de visage ", "Epilations ", "Sugaring "],
    },
    {
        id:4,
        photo: massage,
        name:"Massages",
        description: ["Vacuothérapie ", "Relaxant "],
    },
    {
        id:5,
        photo: lashes,
        name:"Extension des cils",
        description: [" Kardashian ","/ 2D ", " / 3D " ],
    },
    {
        id: 6,
        photo: thera, 
        name:"Therapie",
        description: [" Soin du corps à l'argile / miel  " ],
    },
]

export const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 760, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ] 
export const photosInterieur = [
    {
        id: 1,
        image: mass, 
    },
    {
        id: 2,
        image: salInt, 
    },
    {
        id: 3,
        image: pmu, 
    },

]

export const ContactInfo = [
    {
        id:1,
        logo: <BsTelephone/>,
        value: '+212 613 152 728'
    },
    {
        id:2,
        logo: <CiMapPin className='text-xl'/>,
        value: 'Av. Colonel Gazeille, residence Harmonie, 1er étage, Appt 2, Gueliz - Marrakech'
    },
    
]