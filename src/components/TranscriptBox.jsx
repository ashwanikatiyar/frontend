//src/components/TranscriptBox.jsx

import React from "react";
import "../../styles/transcript.css"; // Add new styles

const TranscriptBox = ({ transcript, onSave, onRetry, onCancel }) => {
  return (
    <div className="transcript-box">
      <h3>Transcript</h3>
      <p className="transcript-text">{transcript || "No transcript available."}</p>
      
      <div className="button-group">
        <button className="save-btn" onClick={onSave}>Save</button>
        <button className="retry-btn" onClick={onRetry}>Retry</button>
        <button className="cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default TranscriptBox;
