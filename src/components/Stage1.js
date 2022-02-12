
import React,{useState,useContext,useRef} from 'react'
import {Button,Form,Alert,Row,Col,} from 'react-bootstrap'
import { myContext } from '../context/FileC'
import "./stages.css"

function Stage1() {

    // states of the program

    const textref = useRef()
    const context = useContext(myContext)
    const [erorr, seterorr] = useState([false,""])


    // form submit handler function

   const  handlesubmit = (e) =>{

       e.preventDefault()

       const value = textref.current.value

       const validate = validation(value)

             if(validate){

            seterorr([false,''])
            context.addplayer(value)

            textref.current.value = ""
            
            
             
         
             }else{

                console.log("erorr")

                  }
          }
  
        //   form validation

          const validation = (info) =>{

               if(!info){
  
                 seterorr([true,"sry you need to add somthing"])
                       return false

                }
                  if(info.length <= 3){

                  seterorr([true,"sry you must add more charachter"])
                      return false
       
                }

                      return true
      
          }
  
        return (

        <>
        {/* ui form */}
         <Form onSubmit={handlesubmit}>
 
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">

        <Form.Label style={{fontSize:"large",paddingRight:"40px"}} column sm="2">
             Name:
        </Form.Label>

         <Col sm="10">

         <Form.Control ref={textref} type="text" placeholder="Inter your Name" />

         </Col>

        </Form.Group>

    {erorr[0]

        ?

    <Alert style={{width:"230px",height:"40px",fontSize:"small",display:"flex",alignItems:"center",marginLeft:"55px"}} variant="danger">
     {erorr[1]}
    </Alert>
    
      :null
}

      <Button style={{marginLeft:"110px"}} variant="primary" type="submit">
          add player
      </Button>
      {
          context.state.players && context.state.players.length >0 
              ?
            <article>
            <hr/>
            <div>

              <ul className="list-group">

               {context.state.players.map((item,index)=>(

                <li key={index} className={"list-item"}>{item}<span onClick={()=> context.removeplayer(index)} className="badge badge-danger">x</span></li>
                
                 
                ))}

              </ul>

             </div>
                      
                       <div onClick={()=>context.next()} className="action-button">

                         NEXT

                     </div>
           </article>

           :null

               }

         </Form>
        

        </>
    )
}

export default Stage1
