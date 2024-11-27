"use client";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<{
    code: string;
    explanation: string;
  } | null>(null);
  const [error, setError] = useState("");
  const [copied, isCopied] = useState(false);

  const baseUrl: string = "http://localhost:8000"; // Can replace later with env var or config.

  // Generate code for query input.
  const generateCode = async () => {
    try {
      setError("");
      setResponse(null);
      // Get data from backend service
      const res = await axios.post(`${baseUrl}/generate/`, { question });

      setResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Something went wrong.");
    }
  };

  // Copy code to clipboard for easy paste to code editor of user choice.
  const copyCode = () => {
    if (response?.code) {
      navigator.clipboard.writeText(response.code).then(() => {
        isCopied(true);
        setTimeout(() => isCopied(false), 2000); // Reset copied state after 2 seconds
      });
    }
  };

  return (
    <>
      <div style={{ fontFamily: "GeistMonoVF, sans-serif", padding: "2rem" }}>
        <h1 className="text-4xl pt-2 pb-4 mx-auto text-blue-400 font-semibold text-center">
          Tutor AI
        </h1>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a coding question (e.g., add 2 numbers)"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          className="text-slate-900"
        />
        <button
          onClick={generateCode}
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          className="py-2 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-100 hover:text-blue-500 hover:text-xl"
        >
          Generate Code
        </button>
        {response && (
          <div style={{ marginTop: "2rem" }}>
            <h2 className="py-2">Generated Code:</h2>
            <div
              onClick={copyCode}
              style={{
                backgroundColor: "#f4f4f4",
                padding: "1rem",
                borderRadius: "5px",
                cursor: "pointer",
                border: "1px solid #ccc",
                position: "relative",
              }}
            >
              <pre
                style={{
                  backgroundColor: "#f4f4f4",
                  padding: "1rem",
                  borderRadius: "5px",
                }}
                className="text-green-800"
              >
                {response.code}
              </pre>
              <span className="text-slate-900"
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "10px",
                  fontSize: "12px",
                  color: copied ? "green" : "#666",
                }}
              >
                {copied ? "Copied!" : "Click to copy"}
              </span>
            </div>
            <p className="py-2">
              <strong className="text-green-500">Explanation:</strong>{" "}
              {response.explanation}
            </p>
          </div>
        )}
        {error && <p className="text-red-500 mt-4 text-xl">{error}</p>}
      </div>
    </>
  );
};

export default Home;
