import styled from '@emotion/styled'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme.ts'
import { Typography } from '@mui/material'
import { NavLink } from 'react-router'
import { Botao } from '../../componentes/Botao/index.jsx'

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.backgroudcolor};
    align-items: center;
    height: 100vh;
`
const Wrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    border-radius: 25px;
    background-color: ${props => props.backgroudcolor};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
    width: 1200px;
    max-width: 90%;
    height: 80%;
    padding: 16px;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

function ErrorPage() {
  return (
    <ThemeProvider theme={theme}>
        <Container backgroudcolor={theme.palette.primary.main}>
            <Wrapper backgroudcolor={theme.palette.grey[50]}>
                <TextWrapper>
                    <Typography
                        variant='h2'
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 400,
                            textAlign: 'center'
                        }}
                    >
                        Página não encontrada
                    </Typography>
                    <Typography 
                        variant='body1' 
                        sx={{textAlign: 'center'}}
                    >
                        A página que está procurando não existe ou encontra-se indisponível
                    </Typography>
                </TextWrapper>
                <NavLink style={{textDecoration: 'none'}} to={'/'}>
                    <Botao variant={'contained'}>Voltar para a tela inicial</Botao>
                </NavLink>
            </Wrapper>
        </Container>
    </ThemeProvider>
  )
}

export default ErrorPage