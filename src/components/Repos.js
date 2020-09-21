import React from 'react'

export const Repos = ({ repos }) => {
    return (
        <ul className='list-group mb-4'>
            {repos.map(repo => (
                <li key={repo.id} className='list-group-item'>
                {repo.name}
                </li>

            ))}

        </ul>
    )
}
