import { useState } from 'react';

const DataBinder = () => {
   const [text, setText] = useState('');

   const handleChange = (e) => {
      setText(e.target.value);
   };

   return (
      <div>
         <input type="text" value={text} onChange={handleChange} />
         <p>{text}</p>
         {text.length ? (
            <button type="submit">Submit</button>
         ) : (
            <button type="submit" disabled>
               Submit
            </button>
         )}
      </div>
   );
};

export default DataBinder;
