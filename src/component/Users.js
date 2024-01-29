import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../features/users/usersSlice"


function Users() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    console.log(users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (

        <div>
            <h2>users</h2>
            {users.loading ? <h3>Loading</h3> : null}
            {users.users.length ? users.users.map(user => <p key={user.id}>{user.name}</p>) : null}
            {!users.users.length ? <h1>an error occurred</h1> : null}
        </div>
    )
}

export default Users