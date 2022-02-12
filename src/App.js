import { myContext } from "./context/FileC";
import { useContext } from "react";
import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"


function App() {

    const context = useContext(myContext)
    
  return (

    
         
          <div className="container">
      <p>who is the most lucky person?</p>
      <div className="item">

        {
        (context.state.stage === 1) ?
         
         <Stage1/>
         :
         <Stage2/>
      
      }
        

      </div>
      
    </div>
       

   
   
  );
}

export default App;
