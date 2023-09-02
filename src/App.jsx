import { useState } from 'react'
import './App.css'

function App() {

  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const operator = ['*', '/', '+', '-', '.', '(', ')', 'ans']

  const updateCalc = (value) =>{
    
    if (
      operator.includes(value) && calc === '' || operator.includes(value) && operator.includes(calc.slice(-1))
      ) {
        return;
      }

      setCalc(calc + value);

    if (!operator.includes(value)){
      setResult(eval(calc + value).toString());
    }

  }

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }

  const sin = () =>{
    setResult(Math.sin(result).toString())
  }
  const cos = () =>{
    setResult(Math.cos(result).toString())
  }
  const tan = () =>{
    setResult(Math.tan(result).toString())
  }

  const inversion = () =>{
    setResult((1 / result).toString());
  }

  const squarRoot = () =>{
    setResult(Math.sqrt(result).toString())
  }

  const pi = () =>{
    setResult((Math.PI * result).toString())
  }

  const squar = () =>{
    setResult((result) * (result))
  }

  const cube = () =>{
    setResult((result) * (result) * (result))
  }

  const log = () =>{
    setResult(Math.log10(result).toString())
  }

  const abs = () =>{
    setResult(Math.pow)
  }

  const exp = () =>{
    setResult(Math.exp(result).toString())
  }

  const pow = () =>{
    setResult(Math.evaluate([result, pow(setResult, result)]).toString())
  }

  const factorialX = (num) =>{
    if (num < 0 ){
      return -1
    }
    else if (num == 0) {
      return 1
    }
    else {
      return (num * factorialX(num-1))
    }
  }

  const factorial = () =>{
    setResult(factorialX(result))
  }

  const deleteLast = () =>{
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value)
    setResult(value)
  }

  const clear = () =>{
    setCalc('')
    setResult('')
  }



  return (
    <main className='container=all'>
      <div className='back-op'>

        <div className='field-name'> {/* calculator name */} 
          <p>Scientific Calculator</p>
          <span>v 1.0.1</span>
        </div>

        <div className='field-result'>
          <div className='show-op turn-on-off' id='texto'></div>
          <input type="text" id="results_calc" readOnly autoComplete='off' value={calc || '0'} size='28' maxLength='25' />
          <div className='show-result'>{result ? <span>({result})</span> : ''}</div>
        </div>

        <section className='container'>

          <div className='btn-column'>
            <span>SHIFT</span>
            <button className='btn bg-gray'></button>
          </div>

          <div className='btn-column'>
            <span>ALPHA</span>
            <button className='btn bg-gray'></button>
          </div>

          <button className='btn-replay bg-gray'>REPLAY</button>

          <div className='btn-column'>
            <span>MODE</span>
            <button className='btn bg-gray'></button>
          </div>

          <div className='btn-column'>
            <span>ON</span>
            <button className='btn onOff bg-gray'></button>
          </div>
        </section>

        <section className='container-one'>{/* add more values && more features */} 
          <button className='btn-cs x-1' onClick={factorial} value='x!'>x!</button>
          <button className='btn-cs' onClick={calculate} value='equal'>Calc</button>
          <span className='btn-cs opacity'></span>
          <span className='btn-cs opacity'></span>
          <button className='btn-cs' onClick={pi} value='3,1416'>π</button>
          <button className='btn-cs x3' onClick={cube} value='pow'>x³</button>
          <button className='btn-cs'>ab/c</button>
          <button className='btn-cs' onClick={squarRoot} value='sqrt'>√</button>
          <button className="btn-cs" onClick={squar} value="sq">x²</button>
          <button className='btn-cs' onClick={pow} value='^'>^</button>
          <button className='btn-cs' onClick={log} value='log'>log</button>
          <button className='btn-cs' onClick={inversion} value='In'>In</button>
          <button className='btn-cs' value='-'>(-)</button>
          <button className='btn-cs'>.,,,</button>
          <button className='btn-cs'>hyp</button>
          <button className='btn-cs' onClick={sin} value='sin'>sin</button>
          <button className='btn-cs' onClick={cos} value='cos'>cos</button>
          <button className='btn-cs' onClick={tan} value='tan'>tan</button>
          <button className='btn-cs'>Rcl</button>
          <button className='btn-cs'>Eng</button>
          <button className='btn-cs' value='('>(</button>
          <button className='btn-cs' value=')'>)</button>
          <button className='btn-cs' value=','>,</button>
          <button className='btn-cs' value='+'>m+</button>
        </section>

        <section className="container-two">
                <button className="btn-math" onClick={()=> updateCalc('7')} value="7">7</button>
                <button className="btn-math" onClick={()=> updateCalc('8')} value="8">8</button>
                <button className="btn-math" onClick={()=> updateCalc('9')} value="9">9</button>
                <button className="btn-math btn-action" onClick={deleteLast} value="del">DEL</button>
                <button className="btn-math btn-action" onClick={clear} value="clear">AC</button>
                <button className="btn-math" onClick={()=> updateCalc('4')} value="4">4</button>
                <button className="btn-math" onClick={()=> updateCalc('5')} value="5">5</button>
                <button className="btn-math" onClick={()=> updateCalc('6')} value="6">6</button>
                <button className="btn-math" onClick={()=> updateCalc('*')} value="*">x</button>
                <button className="btn-math" onClick={()=> updateCalc('/')} value="/">/</button>
                <button className="btn-math" onClick={()=> updateCalc('1')} value="1">1</button>
                <button className="btn-math" onClick={()=> updateCalc('2')} value="2">2</button>
                <button className="btn-math" onClick={()=> updateCalc('3')} value="3">3</button>
                <button className="btn-math" onClick={()=> updateCalc('+')} value="+">+</button>
                <button className="btn-math" onClick={()=> updateCalc('-')} value="-">-</button>
                <button className="btn-math" onClick={()=> updateCalc('0')} value="0">0</button>
                <button className="btn-math" onClick={()=> updateCalc('.')} value=".">.</button>
                <button className="btn-math" onClick={exp} value="exp">EXP</button>
                <button className="btn-math" value="ans">Ans</button>
                <button className="btn-math" onClick={calculate} value="equal">=</button>
             </section>
      </div>
    </main>
  )
}

export default App
