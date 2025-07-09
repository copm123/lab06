// src/components/CountDownTimer.js
import React, { useState, useEffect, useRef } from "react";

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 phút = 300 giây
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, "0")}s`;
  };

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimeLeft(300);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⏳ TIMER</h2>
      <h1>{timeLeft > 0 ? formatTime(timeLeft) : "Hết giờ!"}</h1>
      <button onClick={startTimer}>START</button>
      <button onClick={resetTimer} style={{ marginLeft: "10px" }}>
        RESET
      </button>
    </div>
  );
};

export default CountDownTimer;
