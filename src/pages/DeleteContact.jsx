import React from 'react'
import { deleteContact } from './contacts';

export async function action({ params }) {
    throw new Error("oh dang!");
    await deleteContact(params.contactId);
    return redirect("/");
  }

function DeleteContact() {
  return (
    <div>DeleteContact</div>
  )
}

export default DeleteContact