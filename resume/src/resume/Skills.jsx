
const Skills = (props) => {
    const myskills = props.data.map((skill, index) => (
        <li key={index}>
          <span>{skill}</span>
        </li>
      ));
    return (
      <div className="App">
        <h2>Skills</h2>
        <ul>
            {myskills}
        </ul>
      </div>
    );
  }
  
  export default Skills;