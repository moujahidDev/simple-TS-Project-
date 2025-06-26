import { useEffect, useState } from 'react';
import ListItem from './ListItem';

// types.ts (optional)
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export default function ListGroup( ) {

  const [users, setUsers] = useState< User[]>([]);

  useEffect(() => {

    const controller = new AbortController();

    const fetchUser = async () => {

      try {
        const response = await fetch('https://dummyjson.com/users' , {
        signal: controller.signal,
      });
        const data = await response.json();
        const dataUsers : User[] = data.users
        console.log(dataUsers)
        setUsers(dataUsers);

      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();

    return () => controller.abort(); // cleanup

    } , []);


    return ( 
        <>
         <h2 className="mb-4 text-primary">User List</h2>
         <ListItem  users = { users }/>
        </>
     );
}

