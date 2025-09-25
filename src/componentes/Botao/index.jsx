import styled from "styled-components";
import ButtonMUI from "@mui/material/Button";
import { COLOR_GREY, COLOR_PRIMARY } from '../../theme.ts';

export const CustomButton = styled(ButtonMUI)`
  	&.MuiButton-contained {
      display: flex;
      width: -moz-max-content;
      height: fit-content;
      background-color: ${COLOR_PRIMARY['main']};
      border-radius: 10px;
      &:hover {
        color: white;
        background-color: ${COLOR_PRIMARY['dark']}
      }
    };
    &.MuiButton-outlined {
      display: flex;
      width: -moz-max-content;
      background-color: white;
      border-radius: 10px;
      &:hover {
        background-color: ${COLOR_GREY[200]}
      }
    };
    
`

export const Botao = ({variant, children, ...props}) => {
    return(
			<CustomButton variant={variant} {...props}>{children}</CustomButton>
    );
}