import { Link } from "react-router-dom";
import { topProjects } from "../../constants/project";
import Card from "../Card";
import Button from "../Button";

const TopProjects = () => {
  return (
    <Card className="top-projects">
      <Card.Header title="Top Projects" />
      <Card.Body>
        {topProjects.map((project) => (
          <Card className="m-4 border-2 border-gray-500 " key={project.id}>
            <Card.Header title={project.name} />
            <Card.Body>
              <p>{project.description}</p>
              <div className="flex justify-between gap-4 mx-auto">
                <Button
                  variant="classicv2"
                  size="sm"
                  className="mt-4 px-6 py-5.5"
                  rounded="3xl"
                >
                  <Link to={project.liveUrl || "#"} className="project-link">
                    Live Demo
                  </Link>
                </Button>
                <Button
                  variant="classicv2"
                  size="sm"
                  className="mt-4 px-6 py-5.5"
                  rounded="3xl"
                >
                  <Link to={project.githubUrl || "#"} className="project-link">
                    Github
                  </Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
};

export default TopProjects;
