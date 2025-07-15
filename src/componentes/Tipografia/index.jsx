import { Typography } from "@mui/material";
import styled from "styled-components";

const StyledTypography = styled(Typography)`
    color: #55565a;
`

export const Tipografia = ({variante, componente, children}) => {
    return (
        <StyledTypography variant={variante} component={componente}>
            {children}
        </StyledTypography>
    );
}