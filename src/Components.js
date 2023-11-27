import styled, {css} from "styled-components"  // paketi kurulan styled-component çekildi.  // css i props için dahil ettik 
                                              // npm i styled-components 

export const Title=styled.span`
font-size:50px;
font-weight:600;
color:black;


${props=>props.theme === 'blue' && css`
background:blue;
color:orange;

`}


`


