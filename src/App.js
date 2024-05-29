import "./styles.css";

const skills = [
  {
    name: "Javascript",
    emoji: "💪",
    backgroundColor: "lightsteelblue",
  },
  {
    name: "HTML+CSS",
    emoji: "💪",
    backgroundColor: "lightblue",
  },
  {
    name: "Git and GitHub",
    emoji: "👍",
    backgroundColor: "green",
  },
  {
    name: "React",
    emoji: "✌️",
    backgroundColor: "orange",
  },
  {
    name: "Symfony",
    emoji: "👍",
    backgroundColor: "pink",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Data skills={skills} />
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
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            emoji={skill.emoji}
            backgroundColor={skill.backgroundColor}
          />
        ))}
      </ul>
    </main>
  );
}

function Skill({ name, emoji, backgroundColor }) {
  return (
    <li className="skill" style={{ backgroundColor: backgroundColor }}>
      {name}
      {emoji}
    </li>
  );
}
