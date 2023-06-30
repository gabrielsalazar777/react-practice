const UpdateParent = ({ changeText }) => {
   return (
      <div>
         <button onClick={() => changeText('new text!')}>Change!</button>
      </div>
   );
};
export default UpdateParent;
