import styled from "styled-components";
import ButtonMUI from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import theme from '../../theme.ts';

const CustomButton = styled(ButtonMUI)`
  	&.MuiButton-contained {
      display: flex;
      width: -moz-max-content;
      background-color: ${props => props.backgroundColor.main};
      border-radius: 10px;
    };
    &:hover {
		background-color: ${props => props.backgroundColor.dark}
    }
`

export const Botao = ({variant, children, ...props}) => {
    return(
      <ThemeProvider theme={theme}>
			<CustomButton backgroundColor={theme.palette.primary} variant={variant} {...props}>{children}</CustomButton>
      </ThemeProvider>
    );
}