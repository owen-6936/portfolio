import skills from "../../constants/skills";
import Card from "../Card";

const Hero = () => {
  return (
    <Card className="sm:m-4 border-2 border-gray-500 skills">
      <Card.Header
        className="introduction"
        title="My Top Skills and Technologies"
        align="left"
      />
      <Card.Body className="skill-list">
        {skills.map((skill) => (
          <button key={skill.id} className="skill">
            {skill.name}
          </button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Hero;
