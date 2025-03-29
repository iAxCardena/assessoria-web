import * as React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { ThemeProvider, Tooltip } from '@mui/material';
import theme from '../../theme.ts';

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
    background-color: ${(props) => props.option.color != null ? props.option.color : props.defaultColor.light};
  }
  transition: background-color 0.5s;
  background-color: ${(props) => props.current===props.option.id ? (props.option.color != null ? props.option.color : props.defaultColor.main) : "#f0eaea"};
`

export default function RadioOptions({options, onClick}) {
  const [current, setCurrent] = useState(0);

  const handleSelectedItemChange = (value, optionId) => {
    console.log(value)
    setCurrent(optionId)
    onClick(value)
  }

  return (
    <ThemeProvider theme={theme}>
		<StyledContainer>
			{options.map(option => {
				return <Tooltip key={option.id} title={option.hint}>
					<StyledOption key={option.id} defaultColor={theme.palette.primary} current={current} option={option} onClick={() => handleSelectedItemChange(option.value, option.id)}>{option.label}</StyledOption>
				</Tooltip>;
			})}
		</StyledContainer>
	</ThemeProvider>
  );
}
