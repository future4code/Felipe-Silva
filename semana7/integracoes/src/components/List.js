import React from 'react';

function List(props) {
    return (
        <div>
            <h1>Usuários</h1>
            {props.users.map(user => {
                return (<div>
                        <p key={user.id}>{user.name}</p>
                        <button onClick={() => props.deleteUser(user.id)}>x</button>
                        <hr/>
                    </div>
            )})}
        </div>
    )
}

export default List