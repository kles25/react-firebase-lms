import { useContext, useState } from "react";
import "./salogin.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { AuthContext } from "../../../context/AuthContext";


function SALogin() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                navigate('/adminx/user')
            })
            .catch((error) => {
                setError(true);
            })
    }

    return (
        <div className="si-bg">
            <div className="si-container">
                <div className="pages-row">
                    <div className="pages-col-9 si-image-holder">
                        <div className="si-image"></div>
                    </div>
                    <div className="pages-col-3 si-side-holder">
                        <div className="si-side-panel">
                            <div className="si-form-holder">
                                <h2>Sign in as Super Admin</h2>
                                <form onSubmit={handleLogin}>
                                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
                                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                                    <button type="submit">Login</button>
                                    {error && <span>Wrong email or password</span>}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SALogin;
