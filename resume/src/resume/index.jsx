import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = (props) => {
  return (
    <div className="App">
        <h1>Resume</h1>
     <div className="row" style={{display: "flex"}}>
        <div className="col-md-4"><Experience data={props.resumeData.experience} /></div>
        <div className="col-md-4"><Education data={props.resumeData.education} /></div>
        <div className="col-md-4"><Skills data={props.resumeData.skills} /></div>
        <div>
    </div>
     </div>
    </div>
  );
}

export default Resume;