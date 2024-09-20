import { P } from "./Components"   
import 'bootstrap/dist/css/bootstrap.min.css'; 

 export function App() {


  
  return (
    <>
      <div className={`container d-grid gap-2`}>
        <P>Styled Components</P><br/>
        <P theme="blue">Styled Components Props feature</P>
      </div>
    </>
  )
}
