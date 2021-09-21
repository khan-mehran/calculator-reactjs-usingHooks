import React, { useState } from 'react'

export const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick=(e)=>{
        setResult(result.concat(e.target.name))
    }
    const handleClear=()=>{
        setResult('');
    }
    const handleBack=()=>{
        setResult(result.slice(0,-1))
    }
    
    const handleCalculate=()=>{
    //   let  operatorArray = ['+','-','*','/'];
      try {
        setResult(eval(result).toString())
      }
      catch (error) {
        setResult('Error')
      }
        
    }

    return (
        <div className='main'>
            <h1>Calculator</h1>
            <div className='calculator'>
                <div className='display'>
                    <input id='input' type='text' placeholder='0' value={result} />
                </div>
                <div className='buttons'>
                    <button onClick={handleClear} name='AC' className='cls'>AC</button><button onClick={handleBack} name='c' className='red-btn'>C</button><button onClick={handleClick} name='+' className='red-btn'>+</button>  
                </div>
                <div className='num'>
                    <button onClick={handleClick} name='7' className='num-btns'>7</button><button onClick={handleClick} name='8' className='num-btns'>8</button><button onClick={handleClick} name='9' className='num-btns'>9</button><button onClick={handleClick} name='-' className='red-btn'>-</button>
                </div>
                <div className='num'>
                    <button onClick={handleClick} name='4' className='num-btns'>4</button><button onClick={handleClick} name='5' className='num-btns'>5</button><button onClick={handleClick} name='6' className='num-btns'>6</button><button onClick={handleClick} name='*' className='red-btn'>x</button>
                </div>
                <div className='num'>
                    <button onClick={handleClick} name='1' className='num-btns'>1</button><button onClick={handleClick} name='2' className='num-btns'>2</button><button onClick={handleClick} name='3' className='num-btns'>3</button><button onClick={handleClick} name='/' className='red-btn'>/</button>
                </div>
                <div className='num'>
                    <button onClick={handleClick} name='0' className='num-btns'>0</button><button onClick={handleClick} name='.' className='num-btns'>.</button><button onClick={handleCalculate} name='calculate' className='red-btn-c'>=</button>
                </div>
            </div>
        </div>
    )
}
