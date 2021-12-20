import React,{useContext} from 'react';
import {MyContext} from '../context';
import {Button} from 'react-bootstrap';


const Stage2 = ()=> {
  const context = useContext(MyContext);

  return (
    <>
    <div className="Content_stage2">
      <h4>The looser is:</h4>
      <div className="losser">{context.state.result}</div>
    </div>
    <div className='Position_s2'> 
      <Button variant="outline-success" onClick={context.getNewLooser}>Get New looser</Button>{'  '}
      <Button variant="outline-success" onClick={context.startOver} >Start Over</Button>
    </div>
    </>
  );
}

export default Stage2;
