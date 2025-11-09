import React from 'react';
import styled from 'styled-components';
import { useFeedback } from '../hooks/useFeedback';


const List = styled.ul`
  display: flex;
  list-style: none;
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 16px;
  gap: 80px;
  font-size: 18px;
  font-weight: bold;
`;
const Button = styled.button`
  padding: 16px 32px;
  border-radius: 15px;
  margin-right: 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid transparent;
  background: white;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #f0f0f0;
  font-style: italic;
`;
const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #f0f0f0;
`;


export function Feedback() {
  const {
    good,
    neutral,
    bad,
    total,
    positiveFeedback,
    handleButtonStyle,
    incrementGood,
    incrementNeutral,
    incrementBad
  } = useFeedback();

  return (
    <div>
      <Text>Please leave feedback</Text>
      <div>
        <Button onClick={e => handleButtonStyle(e, incrementGood)}>Good</Button>
        <Button onClick={e => handleButtonStyle(e, incrementNeutral)}>Neutral</Button>
        <Button onClick={e => handleButtonStyle(e, incrementBad)}>Bad</Button>
      </div>
      <Subtitle>{total === 0 ? 'No Feedbacks Yet' : 'Feedbacks :'}</Subtitle>

      {total > 0 && (
        <List>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positiveFeedback}%</li>
        </List>
      )}
    </div>
  );
}