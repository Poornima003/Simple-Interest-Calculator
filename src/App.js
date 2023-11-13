import { TextField,Stack,Button} from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleValid,setIsPrincipleValid] = useState(true)
  const [isRateValid,setIsRateValid] = useState(true)
  const [isYearValid,setIsYearValid] = useState(true)


  const validateInput = (e)=>{
       const {name, value} = e.target
       if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(true)
        }else if(name==="rate"){
          setRate(value)
          setIsRateValid(true)
        }else{
          setYear(value)
          setIsYearValid(true)
        }

       }else{
        if(name==="principle"){
          setPrinciple(value)
          setIsPrincipleValid(false)
        }else if(name==="rate"){
          setRate(value)
          setIsRateValid(false)
          
        }else{
          setYear(value)
          setIsYearValid(false)
        }
       }
  }
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely!!!")
    }else{
      setInterest(principle*rate*year/100)
    }
  }
  const setReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleValid(true)
    setIsRateValid(true)
    setIsYearValid(true)
  }
  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div style={{width:'500px'}} className='bg-light p-5 rounded'>

        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>
        <div style={{height:'150px'}} className="interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center rounded flex-column shadow">
            <h1> ₹ {' '} {interest}</h1>
            <p>Total Simple Interest</p>
        </div>

          <form className='mt-5' onSubmit={handleCalculate}>

            <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={(e)=>validateInput(e)}/>
            </div>
           {!isPrincipleValid && 
           <div className="mb-3 text-danger fw-bolder">
            Invalid input
            </div>
           }
            <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate of Interest" variant="outlined" value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
            </div>
            {!isRateValid && 
           <div className="mb-3 text-danger fw-bolder">
            Invalid input
            </div>
           }
            
            <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time Period (yr)" variant="outlined" value={year || ""} name='year' onChange={(e)=>validateInput(e)}/>
            </div>
            {!isYearValid && 
           <div className="mb-3 text-danger fw-bolder">
            Invalid input
            </div>
           }
            

            <Stack className='mt-2' direction="row" spacing={2}>
            <Button type='submit' style={{height:'70px',width:'200px'}} variant="contained"
            disabled={isPrincipleValid && isRateValid && isYearValid?false:true}
            >Calculate</Button>
            <Button onClick={setReset} style={{height:'70px',width:'200px'}}  variant="outlined">Reset</Button>
            </Stack>

           

          </form>

        </div>
     
    </div>
  );
}

export default App;
