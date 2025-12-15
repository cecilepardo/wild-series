import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
      });
  }, []);

  return (
    <main>
      <h1>Séries</h1>

      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <img src={program.poster} alt={program.title} width={200} />
            <p>{program.synopsis}</p>
            <p>
              {program.country} – {program.year}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Programs;
