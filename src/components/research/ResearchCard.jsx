const ResearchCard = ({ title, author, description, year, pdf }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{author} • {year}</p>
      <p className="mt-2 text-gray-700">{description}</p>
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-blue-600 hover:underline"
      >
        View PDF →
      </a>
    </div>
  );
};

export default ResearchCard;
