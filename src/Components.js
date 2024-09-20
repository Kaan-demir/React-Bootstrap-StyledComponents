import styled, {css} from "styled-components"  
                                              

export const P=styled.p

`
font-size:50px;
font-weight:600;
color:black;



${props=>props.theme === 'blue' && css`
background:blue;
color:white;
padding:10px 24px;
border-radius:17px;
`}


`


