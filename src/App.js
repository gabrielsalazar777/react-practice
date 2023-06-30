import { useState } from 'react';
import DataBinder from './components/DataBinder';
import ToggleButton from './components/ToggleButton';
import UserList from './components/UserList';
import UpdateParent from './components/UpdateParent';
import Calculator from './components/Calculator';
import Counter from './components/Counter';

function App() {
   const [parentText, setParentText] = useState('Change me!');

   const changeText = (newText) => {
      setParentText(newText);
   };

   return (
      <div className="App">
         <p>JSX is cool!</p>
         <UserList />
         <br /> <hr />
         <ToggleButton />
         <br /> <hr />
         <DataBinder />
         <br /> <hr />
         <p>{parentText}</p>
         <UpdateParent changeText={changeText} />
         <br /> <hr />
         <Calculator />
         <br /> <hr />
         <Counter />
      </div>
   );
}

export default App;
