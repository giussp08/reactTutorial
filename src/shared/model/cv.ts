import {TLanguages} from "./languages";
import {THobbies} from "./hobbies";
import {TExperience} from "./experience";
import {TSkill} from "./skill";
import {TEducation} from "./education";
import {TDocumentation} from "./documentation";

export type TCv = {
    name: string,
    surname:string,
    img:string,
    address:string,
    phone:string,
    email:string,
    languages: TLanguages[];
    hobbies: THobbies[];
    skill: TSkill[];
    experience : TExperience[];
    education : TEducation[];
    documentation : TDocumentation[];
}