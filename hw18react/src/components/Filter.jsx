
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';

const Input = styled.input`
  color: #000;
  width: 200px;
  height: 30px;
  border-radius: 15px;
  font-weight: bold;
  padding-left: 20px;
  font-size: 16px;
  font-style: italic;
  margin-left: 20px;
  border: 5px solid yellow;
`;
const Label = styled.label`
  color: #fff;
  font-size: 36px;
  font-style: italic;
  font-weight: bold;
  margin-right: 20px;
`;

function Filter() {
  const { filter, setFilter } = useContext(GlobalContext);

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={e => setFilter(e.target.value)} />
    </Label>
  );
}
export default Filter;
