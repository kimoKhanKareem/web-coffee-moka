import { css } from "styled-components"


export const mobile = (props)=>{
    return css`
        @media (max-width: 375px){
            ${props}
        }
    `;
}

export const promobile = (props)=>{
    return css`
        @media (max-width: 414px){
            ${props}
        }
    `;
}

export const tab = (props)=>{
    return css`
        @media (max-width: 768px){
            ${props}
        }
    `;
}

export const desktop = (props)=>{
    return css`
        @media (max-width: 1024px){
            ${props}
        }
    `;
}