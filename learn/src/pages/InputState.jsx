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
      <h1 className=" text-center mt-2">
        <span className="text-2xl font-bold text-green-700">Correct!</span>
        <br /> Lima is the city with the billboard.
        <br />
        <button
          onClick={() => window.location.reload()}
          className="border px-2 mt-2"
        >
          refresh
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
    <div className="text-center">
      <h1 className="text-xl font-bold">City Quiz</h1>
      <p className="">
        In which city is there a billboard which turn air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleChange}
          className="border-2 mt-1"
        />
        <br />
        <button
          disabled={isDisabled}
          className={`bg-sky-500 px-2 p-1 text-white hover:cursor-pointer ${
            isDisabled ? "opacity-60" : ""
          }`}
        >
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">{error.message}</p>}
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
