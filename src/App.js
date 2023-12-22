import { useState } from 'react';
import './App.css';

function App() {

   const [result, setResult] = useState('')

   const handleClick = (e)=>{
      setResult(result.concat(e.target.value));
   }
   console.log(setResult);

   const handleClear = ()=>{
      setResult("")
   }
   const handleDelete = ()=>{
      setResult(result.slice(0,-1))
   }

   const handleCalculate = ()=>{
      try{
         setResult(eval(result).toString())
      }
      catch{
         setResult('Error')
      }
   }


  return (
    <div className='d-flex align-items-center justify-content-center w-100 flex-column mt-5 p-5'>
      <h1 style={{color:'blue'}}>CALCULATOR</h1>

    <div className='p-3 flex-column mt-5 border border-3 '  style={{backgroundColor:"",color :"black"}}>
      <input style={{height:'60px',fontSize:'20px'}} className='w-100 rounded mt-3 border-5 border-primary' value={result} type='text' placeholder='0'></input>
      <div className='mt-4 p-2'>
         <button onClick={handleClear} id='clear' style={{width:'50px'}} className='btn btn-success p-2'><i class="fa-solid fa-c"></i></button>
         <button onClick={handleClick} value='%' style={{width:'50px'}} className='btn btn-warning p-2 ms-2'>%</button>
         <button onClick={handleDelete} id='delete' style={{width:'50px'}} className='btn btn-danger p-2 ms-2'><i class="fa-solid fa-rectangle-xmark"></i></button>
         <button onClick={handleClick} value='/' style={{width:'50px'}} className='btn btn-danger p-2 ms-2 '>/</button>
      </div>

      <div style={{marginTop:'-7px'}} className=' p-2'>
         <button onClick={handleClick} value='7' style={{width:'50px'}} className='btn btn-dark p-2'>7</button>
         <button onClick={handleClick} value='8' style={{width:'50px'}} className='btn btn-dark p-2 ms-2'>8</button>
         <button onClick={handleClick} value='9' style={{width:'50px'}} className='btn btn-dark p-2 ms-2'>9</button>
         <button onClick={handleClick} value='*' style={{width:'50px'}} className='btn btn-danger p-2 ms-2'>*</button>
      </div>

      <div style={{marginTop:'-7px'}} className=' p-2'>
         <button onClick={handleClick} value='4' style={{width:'50px'}} className='btn btn-dark p-2'>4</button>
         <button onClick={handleClick} value='5' style={{width:'50px'}} className='btn btn-dark p-2 ms-2'>5</button>
         <button onClick={handleClick} value='6' style={{width:'50px'}} className='btn btn-dark p-2 ms-2'>6</button>
         <button onClick={handleClick} value='-' style={{width:'50px'}} className='btn btn-danger p-2 ms-2'>-</button>
      </div>

      <div style={{marginTop:'-7px'}} className=' p-2'>
         <button onClick={handleClick} value='1' style={{width:'50px'}} className='btn btn-dark p-2'>1</button>
         <button onClick={handleClick} value='2' style={{width:'50px'}} className='btn btn-dark p-2 ms-2'>2</button>
         <button onClick={handleClick} value='3' style={{width:'50px'}} className='btn btn-dark p-2 ms-2'>3</button>
         <button onClick={handleClick} value='+' style={{width:'50px'}} className='btn btn-danger p-2 ms-2'>+</button>
      </div>

      <div style={{marginTop:'-7px'}} className=' p-2'>
         <button onClick={handleClick} value='00' style={{width:'50px'}} className='btn btn-dark p-2'>00</button>
         <button onClick={handleClick} value='0' style={{width:'50px'}} className='btn btn-dark p-2 ms-2'>0</button>
         <button onClick={handleClick} value='.' style={{width:'50px'}} className='btn btn-dark p-2 ms-2'>.</button>
         <button onClick={handleCalculate} style={{width:'50px'}} className='btn btn-danger p-2 ms-2'><i class="fa-solid fa-equals"></i></button>
      </div>

    </div>
      
    </div>
  );
}

export default App;
