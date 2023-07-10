import React, { createContext, useReducer } from 'react';

import { ADD_CONTACT } from './actions/ContactListActions.js'

export const Context = createContext();


const reducer = (state, action) => {

    switch (action.type) {

        case ADD_CONTACT: {

            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.data
                ]
            }
        }

        case EDIT_CONTACT: {
            return {

            }
        }
    }
}

const initialState = {
    contacts: [
        {
     
            name: 'Mike Anamendolla',
            addresss: '5842 Hillcrest RD',
            phone: '(870) 288-4149',
            email: 'mike.ana@example.com',
        }
    ]
}

export default function Provider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}