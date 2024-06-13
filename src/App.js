
import Input from './components/Input';
import Button from './components/Button';
import './styles.css';


import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  const handleSplitNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const split = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(split));
      setOperation('');
    }
  }

  const handleMultiplyNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation('');
    }
  }

  const handlePercentNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const percent = (Number(firstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber(String(percent));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case '/':
          handleSplitNumber();
          break;
        case '*':
          handleMultiplyNumber();
          break;
        case '%':
          handlePercentNumber();
          break;
        default:
          break;

      }
      
    } 
  }

  return (
    <Container>
      <Content>
        <Input value = {currentNumber}/>
        <Row>
        <Button className="red-button" label= 'C' onClick={handleOnClear}/>
        <Button className='black-button' label= '/'onClick={handleSplitNumber}/>
        <Button className='black-button' label= '%'onClick={handlePercentNumber}/>
        <Button className='black-button' label= 'x'onClick={handleMultiplyNumber}/>
        
        </Row>
        <Row>
        <Button className="gray-button" label= '7'onClick={() => handleAddNumber('7')}/>
        <Button className="gray-button" label= '8'onClick={() => handleAddNumber('8')}/>
        <Button className="gray-button" label= '9'onClick={() => handleAddNumber('9')}/>
        <Button className='black-button' label= '-'onClick={handleMinusNumber}/>
        </Row>
        <Row>
        <Button className="gray-button" label= '4'onClick={() => handleAddNumber('4')}/>
        <Button className="gray-button" label= '5'onClick={() => handleAddNumber('5')}/>
        <Button className="gray-button" label= '6'onClick={() => handleAddNumber('6')}/>
        <Button className='black-button' label= '+'onClick={handleSumNumber}/>
        </Row>
        <Row>
        <Button className="gray-button" label= '1'onClick={() => handleAddNumber('1')}/>
        <Button className="gray-button" label= '2'onClick={() => handleAddNumber('2')}/>
        <Button className="gray-button" label= '3'onClick={() => handleAddNumber('3')}/>
        <Button className='black-button' label= '='onClick={handleEquals}/>
        </Row>
        <Row>
        <Button className="gray-button" label= '0'onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
