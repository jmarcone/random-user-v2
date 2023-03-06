import React from 'react';

export default function Contact({location, email, phone}) {
  return (
    <div>
      <p>Address:  {location.street.name} {location.street.number}</p>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
    </div>
  )
}
