import { useState } from "react"

const SignUpForm = () => {
    const [userData , setUserData] = useState({name:"", email:"", password:""})

    //let destructure it (e.target.value)
    const changeHandler = ({target}) =>{
        console.log(target);
        setUserData({...userData, [target.name] : target.value})
    }

    return(
        <div>
            <form>
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