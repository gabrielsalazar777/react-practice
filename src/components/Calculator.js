import { useState } from 'react';

const Calculator = () => {
   const [nums, setNums] = useState([null, null]);
   const [sum, setSum] = useState();

   const calculate = () => {
      const tempSum = Number(nums[0]) + Number(nums[1]);
      setSum(tempSum);
   };

   const handleNumber = (e, i) => {
      setNums((prev) => [...prev, (nums[i] = e.target.value)]);
   };

   return (
      <div>
         <input
            type="number"
            placeholder="First Number"
            onChange={(e) => handleNumber(e, 0)}
            value={nums[0]}></input>
         <input
            type="number"
            placeholder="Second Number"
            onChange={(e) => handleNumber(e, 1)}
            value={nums[1]}></input>
         <button onClick={calculate}>Add Numbers</button>
         {sum && <p>{sum}</p>}
      </div>
   );
};
export default Calculator;
