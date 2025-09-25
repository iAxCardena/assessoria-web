import * as React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { COLOR_PAPER, COLOR_PRIMARY } from '../../theme.ts';

const StyledContainer = styled.div`
  display: flex;
  width: fit-content;
  overflow: hidden;
`

const StyledOption = styled.div`
  display: flex;
  justify-content: center;
  height: 25px;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0 4px 4px 0;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.option.color != null ? props.option.color : COLOR_PRIMARY['light']};
  }
  transition: background-color 0.5s;
  background-color: ${(props) => props.current===props.option.value ? (props.option.color != null ? props.option.color : COLOR_PRIMARY['main']) : COLOR_PAPER};
`

export default function RadioOptions({options, onClick, value}) {
  const [current, setCurrent] = useState(value);

  const handleSelectedItemChange = (value) => {
    setCurrent(value)
    onClick(value)
  }

  return (
		<StyledContainer>
			{options.map(option => {
				return <Tooltip key={option.id} title={option.hint}>
					<StyledOption value={value != null ? value : null} key={option.id} current={current} option={option} onClick={() => handleSelectedItemChange(option.value)}>{option.label}</StyledOption>
				</Tooltip>;
			})}
		</StyledContainer>
  );
}
