import React, { useState } from "react";

const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [studySessions, setStudySessions] = useState([]);

  const handleAddSubject = () => {
    if (newSubject && !subjects.includes(newSubject)) {
      setSubjects([...subjects, newSubject]);
      setNewSubject("");
    }
  };

  const handleAddStudySession = () => {
    if (selectedSubject) {
      const newSession = {
        subject: selectedSubject,
        chapter: "",
        topic: "",
        date: "",
        pfs: "",
        sessionType: "First Study",
      };
      setStudySessions([...studySessions, newSession]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Spaced Repetition Tracker</h1>

        {/* Subject Selection */}
        <div className="mb-4">
          <label className="block font-medium">Add New Subject:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              className="border p-2 flex-grow"
              placeholder="Enter subject"
            />
            <button
              onClick={handleAddSubject}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </div>

        {/* Subject Dropdown */}
        <div className="mb-4">
          <label className="block font-medium">Select Subject:</label>
          <select
            className="border p-2 w-full"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">-- Select Subject --</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {/* Add Study Session */}
        <button
          onClick={handleAddStudySession}
          className="bg-green-500 text-white px-4 py-2 rounded w-full mb-4"
        >
          Add Study Session
        </button>

        {/* Study Session List */}
        <div>
          {studySessions.map((session, index) => (
            <div key={index} className="border p-3 rounded mb-2 bg-gray-50">
              <h2 className="font-semibold">Subject: {session.subject}</h2>
              <p>Session Type: {session.sessionType}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
