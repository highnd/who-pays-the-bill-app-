import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const myContext = React.createContext()

class FileC extends Component {
    
    state = {
        stage:1,
        players:[],
        result:"",
    }

                //  add to the list  from input

        addplayerhandle = (name) =>{

           this.setState((prevState)=>({

             players:[
              ...prevState.players,
                 name
                 ]
          }))

       }
                //    remove plyer from the list with click

        removeplayer = (index) =>{

           let newArray = this.state.players
             newArray.splice(index,1)

               this.setState({players:newArray})
           
    }

           
    
                //  go to the looser/wiinner page (second page)

        nextmove = () =>{
                  
            if(this.state.players.length < 2){
                toast.error("you need more than 1 plyaer",{position: toast.POSITION.TOP_LEFT,autoClose:4000,})
                  


            }else{

                this.setState({
                    stage:2
                },()=>{
                    setTimeout(()=>{

                        this.findlooser()
                    },2000)
                })
            }



        }


            //   find who is the looser in list (random)

        findlooser =()=>{

             this.setState({
               result:this.state.players[ Math.floor(Math.random() * this.state.players.length) ]
                             })

                         }  


        
            //  reset and go back to the frist page and level 1

        reset=()=>{

             this.setState({

                    stage:1,
                    players:[],
                    result:"",

                            })

                         }



    render() {

        return (
        <>
            <myContext.Provider value={{ state:this.state, addplayer:this.addplayerhandle , removeplayer:this.removeplayer,next:this.nextmove,findlooser:this.findlooser,reset:this.reset}}>
                            
           {this.props.children}

            </myContext.Provider>
            <ToastContainer style={{background:"pink"}}/>
            </>
        )
    }
}

export {FileC,myContext}