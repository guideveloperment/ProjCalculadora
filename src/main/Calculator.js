import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display/Display'
import Button from '../components/Button/Button'

class Calculator extends Component {

   

    state = {
        displayValue: '0',
        num1 : 0,
        num2 : 0,
        operacao :'',
        resultado : null,
       
       
    }

    clearMemory = () => {
        this.setState({displayValue: 0})
    }

    setOperation = (operation) => {
        let resultado = null
        if(operation == "="){
          resultado = this.state.operacao == "+" ? parseInt(this.state.num1 + this.state.num2) : 0
         // this.setState({num1: parseInt}, {num2:parseInt},{resultado: resultado, displayValue: resultado})
          this.setState({resultado: resultado, displayValue: resultado})
          return 
        }
        this.setState({operacao: operation}) 
        this.setState({displayValue: operation})
        
        //this.resultado = "-".equals(operation) ? this.num1 - this.num2 : this.resultado
       // this.resultado = "*".equals(operation) ? this.num1 * this.num2 : this.resultado
        //this.resultado = "/".equals(operation) ? this.num1 / this.num2 : this.resultado
       // this.resultado = "%".equals(operation) ? this.num1 % this.num2 : this.resultado

        
    }

    addDigit = (digit) => {
        this.setState({displayValue: digit})
        this.setState({num1:digit})
        if(this.state.num1!= this.state.num2){
            //console.log(this.state.displayValue)
          console.log.this.setState({num1: parseInt, num2:parseInt,}, this.state.displayValue)
            
        

        } else{
            this.setState({num2:digit})
            console.log(this.state.displayValue)
        }
             
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" triple clear={this.clearMemory} />
                <Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}

export default Calculator