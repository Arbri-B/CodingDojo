import React,{useState} from "react";
import './compStyle.css';

const UserForm = (props) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    	setFirstName("");
        setLastName("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <div>
        <form className="formHolder" onSubmit={ createUser }>
            <div className="block">
                <label className="lab">Username: </label> 
                <input className="textInput" type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className="block">
                <label className="lab">Last Name</label> 
                <input className="textInput"  type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className="block">
                <label className="lab">Email</label> 
                <input className="textInput"  type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className="block">
                <label className="lab">Password</label>
                <input className="textInput"  type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className="block">
                <label className="lab">Confirm Password</label> 
                <input className="textInput"  type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
        </form>

        <div className="displayHolder">
            <h2>Your Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password:{confirmPassword}</p>
        </div>

        </div>
    );
};
    
export default UserForm;