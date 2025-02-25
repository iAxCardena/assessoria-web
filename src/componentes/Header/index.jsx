import styled, { ThemeProvider } from "styled-components";
import theme from '../../theme.ts';
import logo from '../../assets/logo.png';

const HeaderEstilizado = styled.header`
	background-color: ${props => props.backgroundColor};
	display: flex;
	justify-content: start;
	padding-left: 20px;
	text-align: center;
`
  
const LogoEstilizado = styled.img`
	max-width: 100px;
	max-height: 100px;
	display: flex;
	text-align: center;
	&:hover {
		cursor: pointer;
	}
`

export default function Header() {
	console.log(theme)
    return(
      <ThemeProvider theme={theme}>
        <HeaderEstilizado backgroundColor={theme.palette.background.default}>
			<LogoEstilizado src={logo} alt="Logo"></LogoEstilizado>
        </HeaderEstilizado>
      </ThemeProvider>
    );
}