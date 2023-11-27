import React, { useState } from "react";
import './compStyle.css';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };


        if (firstName.length < 2) {
            setFirstNameError("First name must be at least 2 characters long!");
        }
        else {
            setFirstNameError("");
        }

        if (lastName.length < 2) {
            setLastNameError("Last name must be at least 2 characters long!");
        }
        else {
            setLastNameError("");
        }

        if (email.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }

        if (password.length < 8 || password !== confirmPassword) {
            setPasswordError("Passwords must match and be at least 8 characters");
        } else {
            setPasswordError("");
        }

        setPasswordError((prevPasswordError) => {
            if (!prevPasswordError && !firstNameError && !emailError) {
                const newUser = { firstName, lastName, email, password, confirmPassword };
                console.log("Welcome", newUser);
            } else {
                console.log("Please fill the form correctly!");
            }
            return prevPasswordError; 
        });



    };

    return (
        <div>
            <form className="formHolder" onSubmit={createUser}>
                <div className="block">
                    <label className="lab">First Name: </label>
                    <input className="textInput" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <p>{firstNameError}</p>
                <div className="block">
                    <label className="lab">Last Name</label>
                    <input className="textInput" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <p>{lastNameError}</p>
                <div className="block">
                    <label className="lab">Email</label>
                    <input className="textInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <p>{emailError}</p>
                <div className="block">
                    <label className="lab">Password</label>
                    <input className="textInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p>{passwordError}</p>
                <div className="block">
                    <label className="lab">Confirm Password</label>
                    <input className="textInput" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <p>{passwordError}</p>
                
                        <input type="submit" value="Submit Form" />
                
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