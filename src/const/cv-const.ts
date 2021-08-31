import {TCv} from "../shared/model/cv";
import imgGius from "../img/persona.jpg";

export const CvConst : TCv [] = [
    {
        name: 'Giuseppe',
        surname:'Notaro',
        img: imgGius,
        address:'Viale dei Pini,34',
        phone:'3333333333',
        email:'emailGiuseppe',
        languages: [{name:'Italiano'},{name:'Inglese'}],
        hobbies: [{name:'Basket'}, {name:'Coding'}],
        skill:[{name:'Skill1', description:'description'}],
        experience : [{name:'Cameriere',dateFrom:'01/01/2016', dateTo:'01/01/2019',description:'description' }],
        education :[{name:'Education1',dateFrom:'01/01/2016', dateTo:'01/01/2019',description:'description' }],
        documentation:[{name:'Docmentation1', description:'description'}]
    },
    {
        name: 'Cristian',
        surname:'Ababii',
        img:imgGius,
        address:'Via delle Rose',
        phone:'3333333334',
        email:'emailCristian',
        languages: [{name:'Italiano'},{name:'Inglese'}],
        hobbies: [{name:'Calcio'}, {name:'Coding'}],
        skill:[{name:'Skill1', description:'description'}],
        experience : [{name:'Barman',dateFrom:'01/01/2016', dateTo:'01/01/2019',description:'description' }],
        education :[{name:'Education1',dateFrom:'01/01/2016', dateTo:'01/01/2019',description:'description' }],
        documentation:[{name:'Docmentation1', description:'description'}]
    }
];