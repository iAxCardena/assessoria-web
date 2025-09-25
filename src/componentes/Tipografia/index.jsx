import { Typography } from "@mui/material";
import styled from "styled-components";
import { COLOR_TEXT } from "../../theme.ts";

const StyledTypography = styled(Typography)`
    color: ${props => props.color ? props.color : COLOR_TEXT};
`

export const Tipografia = ({variante, componente, color, children}) => {
    return (
        <StyledTypography color={color} variant={variante} component={componente}>
            {children}
        </StyledTypography>
    );
}