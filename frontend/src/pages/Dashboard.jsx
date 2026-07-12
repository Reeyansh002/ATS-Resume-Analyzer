import { useState } from "react";
import API from "../services/api";

const Dashboard = () => {

    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a PDF");
            return;
        }

        const formData = new FormData();
        formData.append("resume", file);

        try {

            const token = localStorage.getItem("token");

            const res = await API.post(
                "/resume/upload",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            setResult(res.data);

        } catch (err) {

            alert("Upload Failed");

        }

    };

    return (

        <div className="dashboard">

            <h1>ATS Resume Analyzer</h1>

            <div className="uploadBox">

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e)=>setFile(e.target.files[0])}
                />

                <button onClick={handleUpload}>
                    🚀 Analyze Resume
                </button>

            </div>

            {result && (

                <div className="resultCard">

                    <h2>ATS Score</h2>

                    <div className="scoreCircle">

                        {result.atsScore}%

                    </div>

                    <h3>✅ Skills Found</h3>

                    <div className="skills">

                        {result.foundSkills.map((skill,index)=>(
                            <span className="green" key={index}>
                                {skill}
                            </span>
                        ))}

                    </div>

                    <h3>❌ Missing Skills</h3>

                    <div className="skills">

                        {result.missingSkills.map((skill,index)=>(
                            <span className="red" key={index}>
                                {skill}
                            </span>
                        ))}

                    </div>

                    <h3>💡 Suggestions</h3>

                    <ul>

                        {result.suggestions.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}

                    </ul>

                </div>

            )}

        </div>

    );

};

export default Dashboard;