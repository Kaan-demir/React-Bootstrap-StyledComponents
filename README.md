## How to Use React Styled-Components?

Hello! I want to tell you about styled components.

Styled Components is a popular library for styling React applications using tagged template literals. With ** Styled Components ** you can create dynamic styles based on component props, enabling responsive design and theming. Styles are scoped to the component, preventing global style conflicts and ensuring that styles are applied only where intended.

### Basic Usage

To use Styled Components, you first need to install the package:

    npm install styled-components

### Then, you can create a styled component like this:

    import  styled, {css} from  "styled-components"
    
    export  const  Title=styled.p
    '
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

### You can then use the `P` component in your JSX:

    return (
    <>
    <div  className={`container d-grid gap-2`}>
    <P>Styled Components</P><br/>
    <P  theme="blue">Styled Components Props feature</P>
    </div>
    </>
    )

