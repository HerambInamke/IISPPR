import React from 'react';

const projectData = [
    { id: 1, category: 'Education', color: '#a3b18a' },
    { id: 2, category: 'Agriculture', color: '#b6c197' },
    { id: 3, category: 'Water', color: '#8a9a5b' },
    { id: 4, category: 'Energy', color: '#5a6840' },
    { id: 5, category: 'Conservation', color: '#3d4d2b' },
    { id: 6, category: 'Education', color: '#a3b18a' },
    { id: 7, category: 'Agriculture', color: '#b6c197' },
    { id: 8, category: 'Water', color: '#8a9a5b' },
    { id: 9, category: 'Energy', color: '#5a6840' },
];

const ProjectsList = ({ selectedCategory }) => {
    const filtered =
        selectedCategory === 'All'
            ? projectData
            : projectData.filter((p) => p.category === selectedCategory);

    // Always show 9 cards (fill with empty if needed)
    const cards = [...filtered].slice(0, 9);
    while (cards.length < 9) cards.push(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {cards.map((project, idx) => (
                <div
                    key={idx}
                    className="rounded-xl flex flex-col items-center justify-center h-64 shadow-md"
                    style={{ background: project ? project.color : '#b6c197' }}
                >
                    <div className="flex-1 flex items-center justify-center w-full">
                        {/* Optionally add icon or category name */}
                    </div>
                    <button
                        className="mb-6 px-6 py-2 bg-[#222] text-white rounded-full font-semibold shadow hover:bg-[#3d4d2b] transition-colors"
                    >
                        Read More →
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProjectsList;