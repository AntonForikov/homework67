import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {inputStr, reset, result} from '../calculatorSlice';
import CalcButton from '../../components/CalcButton/CalcButton';

const Calculator = () => {
  const calcValue = useSelector((state: RootState) => state.counter.stringResult);
  const dispatch = useDispatch();

  const calcButtonNums = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9','*', '0', '.', '=', '/'];


  return (
    <div className='w-25 d-flex flex-column'>
      <div
        style={{
          display: "flex",
          width: '100%',
          height: '100px',
          border: '2px solid black',
          alignItems: 'end',
          justifyContent: 'end'
        }}
      >
        <h1>{calcValue}</h1>
      </div>
      <div className='d-flex flex-wrap gap-3 justify-content-between mt-3'>
        <CalcButton
          value={'C'}
          flexBasic='100'
          onClick={() => dispatch(reset(''))}
        />

        {calcButtonNums.map(value => {
          if (value === '=') {
            return <CalcButton
              key={value}
              value={value}
              flexBasic='22'
              equal
              onClick={() => dispatch(result())}
            />;
          }
          return <CalcButton
            key={value}
            value={value}
            flexBasic='22'
            onClick={() => dispatch(inputStr(value))}/>;
        })}
      </div>
    </div>
  );
};

export default Calculator;