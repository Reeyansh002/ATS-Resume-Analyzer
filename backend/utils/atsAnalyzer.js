const skills = [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Express",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Excel",
    "Power BI",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Machine Learning",
    "Artificial Intelligence",
    "AI",
    "Data Analysis"
];

const extractSkills = (text) => {
    return skills.filter(skill =>
        text.toLowerCase().includes(skill.toLowerCase())
    );
};

const calculateATSScore = (foundSkills) => {
    return Math.min(
        Math.round((foundSkills.length / skills.length) * 100),
        100
    );
};

const getMissingSkills = (foundSkills) => {
    return skills.filter(skill => !foundSkills.includes(skill));
};
const generateSuggestions = (text, missingSkills) => {

    const suggestions = [];

    if (!text.toLowerCase().includes("project")) {
        suggestions.push("Add a Projects section.");
    }

    if (!text.toLowerCase().includes("experience")) {
        suggestions.push("Add your work experience.");
    }

    if (!text.toLowerCase().includes("certification")) {
        suggestions.push("Include certifications.");
    }

    if (missingSkills.length > 0) {
        suggestions.push(
            `Consider learning: ${missingSkills.slice(0,5).join(", ")}`
        );
    }

    if (text.length < 1000) {
        suggestions.push("Add more details to improve your resume.");
    }

    return suggestions;
};

module.exports = {
    extractSkills,
    calculateATSScore,
    getMissingSkills,
    generateSuggestions
};