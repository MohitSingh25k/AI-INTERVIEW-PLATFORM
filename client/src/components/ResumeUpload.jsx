import { useState } from "react";
import "../styles/ResumeUpload.css";

function ResumeUpload() {
  const [fileName, setFileName] = useState("No file selected");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="resume-upload">
      <h2>📄 Upload Your Resume</h2>

      <p>
        Upload your resume in PDF format to get AI analysis and ATS score.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <p className="file-name">{fileName}</p>

      <button className="upload-btn">
        Upload Resume
      </button>
    </div>
  );
}

export default ResumeUpload;