import { ThemeProvider } from "@emotion/react";

const tema = {
    cores: {
        branco: '#FFF',
        atencao: '',
        focus: '#B009FF',
        primarias: {
            
        },
        secundarias: {

        },
        neutras: {
            preto: '#000000',
            darkGrey: '#222222',
            grey: '#aaaaaa',
            lightGrey: '#dddddd',
        }
    },
    espacamentos: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        l: '32px',
        xl: '48px',
    }
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}