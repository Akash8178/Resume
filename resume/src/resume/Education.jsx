
const Education = (props) => {
    const educations = props.data.map((edu, index) => (
        <div key={index}>
          <p>{edu.degree} - {edu.year}</p>
          <p>{edu.institution}</p>
        </div>
      ));
    
      return (
        <div>
          <h2>Education</h2>
          {educations}
        </div>
      );
  }
  
  export default Education;