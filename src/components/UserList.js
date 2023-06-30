const UserList = () => {
   const users = [
      { name: 'John Doe', id: 1 },
      { name: 'Jane Doe', id: 2 },
      { name: 'Billy Doe', id: 3 },
   ];
   return (
      <div>
         <ul>
            {users.map((user) => {
               return <li>{user.name}</li>;
            })}
         </ul>
      </div>
   );
};

export default UserList;
