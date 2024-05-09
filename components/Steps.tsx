import { useState } from "react";

const STEPS = [{ name: "Upload", description: "Upload your image" }];

const Steps = () => {
  const [steps, setSteps] = useState(0);
  return (
    <div>
      <h1>Steps</h1>
    </div>
  );
};
