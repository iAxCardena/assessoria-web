import styled from "styled-components";

const components = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    bodyBold: 'strong',
    body2: 'p',
    body2Bold: 'strong',
    legenda: 'p',
}

const estilos = {
    h1:`
        color: #55565a;
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
    `,
    h2:`
        color: #55565a;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
    `,
    h3:`
        color: #55565a;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        margin: 16px 0;
    `,
    body:`
        color: #55565a;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    `,
    bodyBold:`
        color: #55565a;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    `,
    body2:`
        color: #55565a;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    `,
    body2Bold:`
        color: #55565a;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
    `,
    legenda:`
        color: #55565a;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    `
}

export const Tipografia = ({variante, componente, children}) => {
    const tag = components[componente]
    const ComponenteUtilizado = styled[tag]`${estilos[variante]}`
    return (
        <ComponenteUtilizado>
            {children}
        </ComponenteUtilizado>
    );
}