import { Link } from "react-router-dom";
import { topProjects } from "../../constants/project";
import Card from "../Card";
import Button from "../Button";
import ImageContainer from "../ImageContainer";
import { generateGradientPlaceholder } from "../../utils/GradientImagePlaceholder";

const TopProjects = () => {
  return (
    <Card amount={0.1} padding="p-0" className="mt-10 my-4">
      <Card.Header title="Top Projects" />
      <Card.Body className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {topProjects.map((project) => (
          <Card
            className="sm:m-4 border-2 border-gray-500"
            key={project.id}
            padding="p-6"
          >
            <Card.Header title={project.name} />
            <Card.Body>
              <ImageContainer
                src={
                  project.imageUrl && project.imageUrl !== ""
                    ? project.imageUrl
                    : generateGradientPlaceholder({
                        text: project.name,
                        width: 150,
                        height: 150,
                      })
                }
                alt={project.name}
                figureClassName="w-full h-full min-h-[300px] max-h-[300px] mb-4"
                width={600}
                height={600}
              />
              <p className="sm:text-lg">{project.description}</p>
              <div className="flex justify-between gap-4 mx-auto lg:w-[80%]">
                <Button
                  variant="classicv2"
                  size="sm"
                  className="px-6 py-5.5"
                  rounded="3xl"
                >
                  <Link to={project.liveUrl || "#"} className="project-link">
                    Live Demo
                  </Link>
                </Button>
                <Button
                  variant="classicv2"
                  size="sm"
                  className="px-6 py-5.5"
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
