import styled from "styled-components";
import ButtonMUI from "@mui/material/Button";

const CustomButton = styled(ButtonMUI)(({props}) => ({
'&.MuiButton-contained': {
    display: 'flex',
    width: '-moz-max-content',
    backgroundColor: '#363636',
    borderRadius: '10px',
  },
  '&:hover': {
    backgroundColor: '#0f0f0f'
  }
}));

export const Botao = ({variant, children, ...props}) => {
    return(
				<CustomButton variant={variant} {...props}>{children}</CustomButton>
    );
}