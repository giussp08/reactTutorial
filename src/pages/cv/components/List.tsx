import { THobbies } from "../../../shared/model/hobbies";
import { TLanguages } from "../../../shared/model/languages";
import { TSkill } from "../../../shared/model/skill";
import { TExperience } from "../../../shared/model/experience";
import { TEducation } from "../../../shared/model/education";
import { TDocumentation } from "../../../shared/model/documentation";

export type ListData = {
  nameArr: string;
  hobbArr: THobbies[];
  langArr: TLanguages[];
  skillArr: TSkill[];
  expArr: TExperience[];
  educArr: TEducation[];
  docArr: TDocumentation[];
};

const List = (props: ListData) => {
  console.log(props.hobbArr)
  const nameArr = props.nameArr;
  var listArr = props.langArr;
  switch (nameArr) {
    case "Hobbies":
      listArr = props.hobbArr;
      break;
    case "Experience":
      listArr = props.expArr;
      break;
    case "Education":
      listArr = props.educArr;
      break;
    case "Skill":
      listArr = props.skillArr;
      break;
    case "Documentation":
      listArr = props.docArr;
      console.log(listArr)
      break;
  }

  return (
    <div>
      <h4 className="padding5">{nameArr}</h4>
      <hr style={{ width: "80%" }}></hr>
      <ul>
        {listArr.map((list: any, i: any) => {
          if (nameArr == "Experience" || nameArr =="Education") {
            return (
              <li key={i}>
                {list.name + " - " + list.dateFrom + " - " + list.dateTo}
              </li>
            );
          } else if(nameArr == "Skill" || nameArr=="Documentation"){
            return <li key={i}>{list.name +" - " +list.desription}</li>;
          }else{
            return <li key={i}>{list.name}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default List;
