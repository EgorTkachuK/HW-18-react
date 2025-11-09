
import { useState, useRef } from 'react';

export function useFeedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const lastClickedRef = useRef(null);

  const total = good + neutral + bad;
  const positiveFeedback = total === 0 ? 0 : Math.round((good / total) * 100);

  const incrementGood = () => setGood(prev => prev + 1);
  const incrementNeutral = () => setNeutral(prev => prev + 1);
  const incrementBad = () => setBad(prev => prev + 1);

  const handleButtonStyle = (e, updater) => {
    updater();
    const btn = e.currentTarget;

    if (lastClickedRef.current && lastClickedRef.current !== btn) {
      lastClickedRef.current.style.borderColor = 'transparent';
      lastClickedRef.current.style.boxShadow = 'none';
    }

    btn.style.borderColor = '#1976d2';
    lastClickedRef.current = btn;
  };

  return {
    good,
    neutral,
    bad,
    total,
    positiveFeedback,
    handleButtonStyle,
    incrementGood,
    incrementNeutral,
    incrementBad
  };
}