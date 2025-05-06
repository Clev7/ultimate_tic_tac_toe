"use client";
import "@/styles/globals.css";

import { useChessClock } from "@/hooks/useChessClock";
import { ChessClock } from "@/components/ChessClock";
import { useForm } from "@/hooks/useForm";
import { useState } from "react";
import styles from "@/styles/test.module.css";
import { ChessClockData } from "@/types/ChessClock";

interface ClockFormProps {
  formState: any;
  handleChange: () => void;
  onSubmit: () => void;
}

const ClockForm = ({ formState, handleChange, onSubmit }: ClockFormProps) => {
  return (
    <>
      <input
        name="p1Time"
        placeholder="Player 1 Time"
        value={formState.p1Time}
        onChange={handleChange}
        className="input"
      />

      <input
        name="p2Time"
        placeholder="Player 2 Time"
        value={formState.p2Time}
        onChange={handleChange}
      />

      <input
        name="increment"
        placeholder="increment"
        value={formState.increment}
        onChange={handleChange}
      />
      <input name="delay" placeholder="delay" value={formState.delay} onChange={handleChange} />
      <button type="submit" onClick={onSubmit}>
        Save Configuration
      </button>
    </>
  );
};

export default function App() {
  // Add hook here
  // and take it from there
  //
  // Here is my planned use case:
  // A. Take in a form with several ChessClock related inputs
  // B. Make the form disappear
  // C. Make the ChessClock appear with the specified configuration

  const [showForm, setShowForm] = useState(true);
  const [formState, handleChange] = useForm({
    p1Time: "",
    p2Time: "",
    increment: 0,
    delay: 0,
  });

  let chessClock;

  return (
    <div id={styles.testContainer}>
      {showForm &&
        <ClockForm
          formState={formState}
          handleChange={handleChange}
          onSubmit={() => {
            setShowForm(!showForm)

            chessClock = useChessClock(formState)
          }}
        />
      }

      {!showForm && <ChessClock {...chessClock!.data}/>}
    </div>
  );
}
