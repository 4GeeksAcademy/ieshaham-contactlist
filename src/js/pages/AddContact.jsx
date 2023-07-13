import React, { useContext } from 'react';
import { Context } from '../context/Provider.jsx';
import { contactListActions } from '../context/actions/contactListActions.js';
import { Link } from 'react-router-dom';

const AddContact = () => {
  const { dispatch } = useContext(Context);

  const handleAddContact = (event) => {
    event.preventDefault();

?


    dispatch(contactListActions.ADD_CONTACT({
      name,
      address,
      phone,
      email,
    }));


    event.target.reset();
  };

  return (
    <form onSubmit={handleAddContact}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <button type="submit">Add Contact</button>
      <Link to="/">
      <button>Go back</button>
      </Link>
    </form>
  );
};

export default AddContact;
