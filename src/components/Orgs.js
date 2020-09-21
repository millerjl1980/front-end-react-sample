import React from 'react'

export const Orgs = ({ orgs }) => {
    if(orgs.length === 0){
        return <h3>Sorry, no organizations listed for this user</h3>;
    }
    return (
        <ul className='list-group mb-4'>
            {orgs.map(org => (
                <li key={org.id} className='list-group-item'>
                {org.name}
                </li>

            ))}
        </ul>

    )
}
