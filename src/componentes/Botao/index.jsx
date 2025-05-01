import styled from "styled-components";
import ButtonMUI from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import theme from '../../theme.ts';

const CustomButton = styled(ButtonMUI)`
  	&.MuiButton-contained {
      display: flex;
      width: -moz-max-content;
      background-color: ${props => props.backgroundcolor.main};
      border-radius: 10px;
    };
    &:hover {
		color: white;
		background-color: ${props => props.backgroundcolor.dark}
    }
`

export const Botao = ({variant, children, ...props}) => {
    return(
      <ThemeProvider theme={theme}>
			<CustomButton backgroundcolor={theme.palette.primary} variant={variant} {...props}>{children}</CustomButton>
      </ThemeProvider>
    );
}