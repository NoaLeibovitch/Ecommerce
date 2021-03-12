import React from 'react'; // we need this to make JSX compile
import './forms.css';
import {FormField} from "./FormField";

function signUp(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const url = "http://localhost:9000/users";

    const username = (document!.getElementById("userName") as HTMLTextAreaElement)!.value;
    const password = (document!.getElementById("password") as HTMLTextAreaElement)!.value;
    const firstname = (document!.getElementById("firstName") as HTMLTextAreaElement)!.value;
    const lastname = (document!.getElementById("lastName") as HTMLTextAreaElement)!.value;
    const email = (document!.getElementById("email") as HTMLTextAreaElement)!.value;

    const data = {
        username : username,
        password : password,
        firstname : firstname,
        lastname : lastname,
        email : email,
    };

    const other_params: RequestInit = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        method : "POST",
        body : JSON.stringify(data),
        mode : 'cors'
    };
    fetch(url, other_params)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Could not reach the API: " + res.statusText);
            }
        })
        .catch(function (error){
            console.log("Error: "+error);
            console.log("Error: "+ other_params);
        });
}
export const EditUserForm = () =>
    <div className='EditUserForm'>
        <FormField id='userName' label='User Name' placeholder='JohnSmith01' readonly={true}/>
        <FormField id='password' type='password' label='Password' placeholder='Password'/>
        <FormField id='firstName' label='First Name' placeholder='John'/>
        <FormField id='lastName' label='Last Name' placeholder='Smith'/>
        <FormField id='email' label='Email address' placeholder='John.Smith@example.com'/>
        <div className='SignUpButton'>
            <button onClick={(e)=>signUp(e)}>Sign Up</button>
        </div>
    </div>

