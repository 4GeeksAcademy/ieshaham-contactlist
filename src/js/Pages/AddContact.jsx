import React, { useContext } from 'react';
import { Context } from '../Context/Provider.jsx';
import { contactListActions } from '../Context/actions/ContactListActions.js';
export default function NewPage() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      {/* Add your page content here */}
    </div>
  );
}
