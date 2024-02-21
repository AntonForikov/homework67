import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {add, decrement, increment, subtract} from '../counterSlice';

const Calculator = () => {
  const calcValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{calcValue}</h1>
      <button type='button' onClick={() => dispatch(increment())}>Increment</button>
      <button type='button' onClick={() => dispatch(decrement())}>Decrement</button>
      <button type='button' onClick={() => dispatch(add(5))}>Add 5</button>
      <button type='button' onClick={() => dispatch(subtract(5))}>Subtract 5</button>
    </div>
  );
};

export default Calculator;