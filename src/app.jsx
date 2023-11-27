
import styles from "./App.module.css"   // css dosylarını bu şeklide import etmek için, styles vb. gibi kendimiz isim vermek istiyorsak module.css olmak zorunda

import { Title } from "./Components"   // js dosyasında exportu default olarak vermediğimiz için Title compenentini {}  bu şeklide aldık 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Bootstrap from "./Bootstrap" // Components olan Bootstrap

 export function App() {

  const tikla=()=>{
    alert("tamamlandı.")
  }

  const handleClick=(deger)=>{
  console.log(deger)
  }

  const handleClick2=()=>{
    console.log("handleClick2")
    }



  const name="Js ile metin düzenleme";
  
  return (
    <>
      <div className={styles.App}>
        <Title>Styled Components</Title><br/>
        <Title theme="blue">Styled Components Props feature</Title>
        <hr></hr>
        
        <Bootstrap/>
         <hr></hr>

        <h1>Button onClick</h1>
        <button onClick={tikla}>Tıkla</button><br/>
        <button onClick={()=>{
        handleClick("deger1");
        handleClick2();  
        }}>Tıkla</button><br/>


        {name.toUpperCase()}<br/>
        {`metin uzunluk - `+ name.length}


      </div>

    </>
  )
}
