import { useState } from 'react';

const ToggleButton = () => {
   const [toggle, setToggle] = useState(true);

   const changeToggle = () => {
      setToggle(!toggle);
   };
   return (
      <div>
         <button onClick={changeToggle}>Toggle!</button>
         {toggle && <p>Toggle Challenge</p>}
      </div>
   );
};

export default ToggleButton;
