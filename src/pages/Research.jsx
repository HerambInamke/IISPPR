import { useEffect, useState } from "react";
import ResearchCard from "../components/ResearchCard";

const Research = () => {
  const [researchData, setResearchData] = useState([]);

  useEffect(() => {
    fetch("/research/researchData.json")
      .then((res) => res.json())
      .then((data) => setResearchData(data))
      .catch((err) => console.error("Error fetching data", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Research Publications</h2>
      {researchData.length === 0 ? (
        <p>Loading research papers...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {researchData.map((item) => (
            <ResearchCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Research;
