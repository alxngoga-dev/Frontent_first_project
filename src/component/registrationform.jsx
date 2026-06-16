import React from "react";
import { useState } from "react";
import { CgPassword } from "react-icons/cg";

function Signup() {
    const [email, setEmail] = useState("");
    const [password,setPassword]=useState("");


    

    return (
        <form>
            <input type="emain" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input type="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button>signup</button>
        </form>



    )
}

export default Signup


