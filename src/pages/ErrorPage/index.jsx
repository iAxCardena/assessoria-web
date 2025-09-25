import styled from '@emotion/styled'
import { COLOR_GREY, COLOR_PRIMARY } from '../../theme.ts'
import { NavLink } from 'react-router'
import { Botao } from '../../componentes/Botao/index.jsx'
import { Tipografia } from '../../componentes/Tipografia/index.jsx'

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${COLOR_PRIMARY['main']};
    align-items: center;
    height: 100vh;
`
const Wrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    border-radius: 25px;
    background-color: ${COLOR_GREY['50']};
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
    <Container>
        <Wrapper>
            <TextWrapper>
                <Tipografia
                    variante='h2'
                    sx={{
                        color: COLOR_PRIMARY['main'],
                        fontWeight: 400,
                        textAlign: 'center'
                    }}
                >
                    Página não encontrada
                </Tipografia>
                <Tipografia 
                    variante='h6' 
                    sx={{textAlign: 'center'}}
                >
                    A página que está procurando não existe ou encontra-se indisponível
                </Tipografia>
            </TextWrapper>
            <NavLink style={{textDecoration: 'none'}} to={'/'}>
                <Botao variant={'contained'}>Voltar para a tela inicial</Botao>
            </NavLink>
        </Wrapper>
    </Container>
  )
}

export default ErrorPage