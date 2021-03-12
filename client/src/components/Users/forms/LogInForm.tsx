import React from 'react'; // we need this to make JSX compile
import './forms.css';
import {FormField} from "./FormField";
import {changeToHomePage} from "../../../store/app/actions";
import store from "../../../store/store";

function logIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, props:Props) {
    event.preventDefault();
    console.log("log in pressed");
    const url = "http://localhost:9000/logIn";

    const username = (document!.getElementById("userName") as HTMLTextAreaElement)!.value;
    const password = (document!.getElementById("password") as HTMLTextAreaElement)!.value;

    const data = {
        username : username,
        password : password,
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
        }).then(res => {
            if(res.length==0){
                (document!.getElementById("errorMsg") as HTMLDivElement)!.hidden = false;
            }
            else {
                store.dispatch(props.logUserIn(res[0].firstname,res[0].id));
                store.dispatch(props.changeToHomePage());
            }
    })
        .catch(function (error){
            console.log("Error: "+error);
            console.log("Error: "+ other_params);
        });
}

type Props = {
    changeToHomePage: any,
    logUserIn: any,
}

export const LogInForm = (props:Props) =>
    <div className='LogInForm'>
        <FormField id='userName' label='User Name' placeholder='JohnSmith01'/>
        <FormField id='password' label='Password' placeholder='Password'/>
        <div id='errorMsg' hidden={true}>No such user or password!</div>
        <div className='LogInButton'>
            <button onClick={(e)=>{logIn(e,props);}}>Log In</button>
        </div>
    </div>

