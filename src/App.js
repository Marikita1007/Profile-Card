import "./styles.css";

const skills = [
  {
    name: "Javascript",
    level: "intermediate",
    backgroundColor: "lightsteelblue",
  },
  {
    name: "HTML+CSS",
    level: "advanced",
    backgroundColor: "lightblue",
  },
  {
    name: "Git and GitHub",
    level: "intermediate",
    backgroundColor: "green",
  },
  {
    name: "React",
    level: "beginner",
    backgroundColor: "orange",
  },
  {
    name: "Symfony",
    level: "intermediate",
    backgroundColor: "pink",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Data skills={skills} key={name} />
    </div>
  );
}

function Avatar() {
  return (
    <>
      <img src="/images/avatar.jpg" alt="Avatar" className="avatar" />
    </>
  );
}

function Data({ skills }) {
  return (
    <main className="data">
      <h1>Marika Abe Lamour</h1>
      <p>
        Full stack web developper with a year experience creating Individual
        interview management software. I enjoy strolling around when I have time
        to refresh myself.
      </p>
      <ul className="skill-list">
        {skills.map((skill, name) => (
          <Skill
            key={name}
            name={skill.name}
            level={skill.level}
            backgroundColor={skill.backgroundColor}
          />
        ))}
      </ul>
    </main>
  );
}

function Skill({ name, level, backgroundColor }) {
  return (
    <li className="skill" style={{ backgroundColor: backgroundColor }}>
      {name}
      {level === "beginner" && "🐣"}
      {level === "intermediate" && "👍"}
      {level === "advanced" && "💪"}
    </li>
  );
}
