
const Experience = (props) => {
    const experiences = props.data.map((exp, index) => (
        <div key={index}>
          <p>{exp.year} - {exp.company}</p>
          <p>{exp.role}</p>
        </div>
      ));
    
      return (
        <div>
          <h2>Experience</h2>
          {experiences}
        </div>
      );
  }
  
  export default Experience;