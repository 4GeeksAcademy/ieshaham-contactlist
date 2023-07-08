import React, { useContext } from 'react';

import { Context } from '../context/Provider.jsx';

import { contactListActions } from '../context/contactListActions.js';

export default function contactListPage() {

    const { state, dispatch } = useContext(Context);

    return (
        <div>
            <h1>Contact List Page</h1>

            <button onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: 'added something else' }))}>Add test contact</button>

            {state.contacts.map((contact) => (
                <div>
                    <p>{contact.name}</p>
                </div>
            ))}

        </div>
    )
}