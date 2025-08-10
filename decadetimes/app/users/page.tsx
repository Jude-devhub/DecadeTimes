import React from 'react'
interface User{
  id: number;
  name: string
}
export default async function Users () {

   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const  users = await response.json();
    console.log(users);



  return (
    <div>users
        <ul> {users.map((user : User) => (
          <li key = {user.id}>
              {user.name}
          </li>
        ))};
          
        </ul>
    </div>
  )
}

