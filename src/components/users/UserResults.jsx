import {useEffect, useState} from 'react'
import Spinner from '../layout/Spinner'

function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])
    
    const fetchUsers = async () => {
        const response = await fetch(`https://api.github.com/users`)

        const data = await response.json()

        console.log(data)
        setUsers(data)
        setLoading(false)
    }

    if(!loading){
        return ( <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user)=>{
            return <h3 key={user.login}>{user.login}</h3>
         })}
         </div>
       )
    }else{
        return <Spinner></Spinner>
    }
  
}

export default UserResults;
