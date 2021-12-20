import React,{useContext,useState,useRef} from 'react';
import {Button,Form,Alert, ListGroup, Badge } from 'react-bootstrap';
import {MyContext} from '../context';


const Stage1 = ()=> {

    const textInput = useRef();
    const context = useContext(MyContext);
    const [error, seterror]= useState([false,''])


    const handleSubmit = (e)=>{ 
        e.preventDefault();
        const value = textInput.current.value
        const validate = validatInput(value)
        if(validate){
           seterror([false,'']);
           context.addPlayer(value)
           textInput.current.value = ''
        }
        
    }

    const validatInput = (value) =>{
        if(value ===''){
            seterror([true, 'Sorry you need to add something'])
            return false;

        }
        if(value.length <= 2){
            seterror([true, 'Sorry you need three charector'])
            return false;

        }
        return true;
    }

    console.log(context)



  return (
    <>
    <Form className="mb-3" onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
    <Form.Control type="text" placeholder="Add player"  ref={textInput}/>
    </Form.Group>
    {
        error[0] ?
        <Alert variant='danger'>
            {error[1]}
        </Alert>
        :null
    }
    <Button className='wrapper' variant="primary" type="submit">Add player</Button>
    {
        context.state.players && context.state.players.length >0 ?
        <>
          <hr/>
          <div>
              <ul className='list-group'>
                  {context.state.players.map((item, idx)=>(

                      <ListGroup key={idx}>
                          <ListGroup.Item variant="info" className="d-flex justify-content-between align-items-center">{item}
                          <Badge bg="danger" onClick={() => context.removePlayer(idx)}>X</Badge>
                          </ListGroup.Item>
                      </ListGroup>
                      
                    //   <li key={idx} className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'> 
                    //       {item}
                    //       <span className="badge badge-danger">
                    //           X
                    //       </span>
                    //   </li>
                  ))
 
                  }

              </ul>

              <br/>

                <Button variant="outline-success" onClick={()=>context.next()}>Next</Button>

          </div>
        </>
        :null
    }


    </Form>
      
    </>
  );
}

export default Stage1;
