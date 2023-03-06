import React from "react";
import Contact from "./Contact";

export default ({user}) => {

    return (
        <div >
            <img src={user.picture.large} alt="name" />
            <p>Name : {user.name.title} {user.name.first} {user.name.last}</p>
            <p>Age : {user.dob.age}</p>
            <Contact location={user.location} email={user.email} phone={user.phone}/>
        </div>
    );
}
