import { useState } from "react"

const SignUpForm = () => {
    const [userData , setUserData] = useState({name:"", email:"", password:""})

    //let destructure it (e.target.value)
    const changeHandler = ({target}) =>{
        console.log(target);
        setUserData({...userData, [target.name] : target.value})
    }

    const submitHandler = (e) => {
        // console.log("submit");
        //to prevent loading, but the main reson is to prevent seeing username and password in the link
        e.preventDefault()
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className="formControl">
                    <label>Name</label>
                    <input type="text" name="name" value={userData.name} onChange={changeHandler} />
                </div>
                <div className="formControl">
                    <label>Email</label>
                    <input type="text" name="email" value={userData.email} onChange={changeHandler} />
                </div>
                <div className="formControl">
                    <label>Password</label>
                    <input type="text" name="password" value={userData.password} onChange={changeHandler} />
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default SignUpForm