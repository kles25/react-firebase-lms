import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";



const User = () => {
    const SignOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    };
    return (
        <div>
            <button onClick={SignOut}>logout</button>
        </div>
    )
}

export default User;
