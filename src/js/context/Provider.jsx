import React, { createContext, useReducer } from 'react';

import { ADD_CONTACT } from '../context/contactListActions.js'

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
            name: 'Iesha Ham',
            email: 'ieshaistesting@gmail.com',
            phone: 'xxx-xxx-xxxxx',
            addresss: 'test addresss'
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