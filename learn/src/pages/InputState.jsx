import { useState, useEffect } from "react";

const InputState = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // typing, submiting, success
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(answer.trim() === "" || status === "submiting");
  }, [answer, status]);

  if (status === "success") {
    return (
      <h1 className="text-center mt-6">
        <span className="text-2xl font-bold text-green-700">Correct!</span>
        <br /> Lima is the city with the billboard.
        <br />
        <button
          onClick={() => window.location.reload()}
          className="border border-gray-300 bg-white px-4 py-2 mt-4 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Refresh
        </button>
      </h1>
    );
  }

  const handleChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
    setStatus("typing");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submiting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setError(new Error("Good guess but not quite right. Try again."));
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        City Quiz
      </h1>
      <p className="text-gray-700 mb-4">
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={answer}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        />
        <button
          disabled={isDisabled}
          className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isDisabled ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          Submit
        </button>
        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
};

export default InputState;

const submitForm = (answer) => {
  return new Promise((resolve, reject) => {
    const isCorrect = answer.toLowerCase().trim() === "lima";
    setTimeout(() => {
      if (isCorrect) {
        resolve("Correct! Lima is the city with the billboard.");
      } else {
        reject(new Error("Good guess but not quite right. Try again."));
      }
    }, 1500);
  });
};
