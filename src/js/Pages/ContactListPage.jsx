import React, { useContext } from 'react';

import { Context } from '../Context/Provider.jsx'

import { contactListActions } from '../Context/actions/ContactListActions.js'


export default function ContactListPage() {

    const { state, dispatch } = useContext(Context);

    return (
        <div>
           
           <span className="right-align">

            <button type="button" className="btn btn-success" onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: '' }))}>Add new contact</button>
            {/*<button onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: 'added something else' }))}>Add test contact</button>*/}
            </span>
            {state.contacts.map((contact) => {
                return (
                    <div>

                        <ul className="list-group">
                            <li className="list-group-item">
                                <img src='https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_640.jpg' />
                                <p><h5>{contact.name}<i className="fas fa-pencil-alt"></i><i className="fas fa-trash-alt"></i></h5></p>
                                <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;{contact.addresss}</p>
                                <p><i className="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;{contact.phone}</p>
                                <p><i className="fas fa-envelope"></i> &nbsp;&nbsp;&nbsp;{contact.email}</p>
                            </li>
                        </ul>


                        <ul className="list-group">
                            <li className="list-group-item">
                                <img src='https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_640.jpg' />
                                <p><h5>{contact.name}<i className="fas fa-pencil-alt"></i><i className="fas fa-trash-alt"></i></h5></p>
                                <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;{contact.addresss}</p>
                                <p><i className="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;{contact.phone}</p>
                                <p><i className="fas fa-envelope"></i> &nbsp;&nbsp;&nbsp;{contact.email}</p>
                            </li>
                        </ul>


                        <ul className="list-group">
                            <li className="list-group-item">
                                <img src='https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_640.jpg' />
                                <p><h5>{contact.name}<i className="fas fa-pencil-alt"></i><i className="fas fa-trash-alt"></i></h5></p>
                                <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;{contact.addresss}</p>
                                <p><i className="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;{contact.phone}</p>
                                <p><i className="fas fa-envelope"></i> &nbsp;&nbsp;&nbsp;{contact.email}</p>
                            </li>
                        </ul>


                        <ul className="list-group">
                            <li className="list-group-item">
                                <img src='https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_640.jpg' />
                                <p><h5>{contact.name}<i className="fas fa-pencil-alt"></i><i className="fas fa-trash-alt"></i></h5></p>
                                <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;{contact.address}</p>
                                <p><i className="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;{contact.phone}</p>
                                <p><i className="fas fa-envelope"></i> &nbsp;&nbsp;&nbsp;{contact.email}</p>
                            </li>
                        </ul>


                    </div>
                );
            })}

        </div>
    )
}