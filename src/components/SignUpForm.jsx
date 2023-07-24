import { useFormik } from "formik"

const initialValues = {
    name: "",
    email: "",
    password: ""
};

const onSubmit = (values) => {
    console.log(values);
}

const validate = (values) =>{
    // console.log(values);
    let errors = {};

    if (!values.name){
        errors.name = "Name is Required"
    }
    if (!values.email) {
        errors.email = "Email is Required"
    }
    if( !values.password) {
        errors.password = "Password is Required"
    }

    return errors;
}

const SignUpForm = () => {
    // const [userData , setUserData] = useState({name:"", email:"", password:""})

    //let destructure it (e.target.value)
    // const changeHandler = ({target}) =>{
    //     console.log(target);
    //     setUserData({...userData, [target.name] : target.value})
    // }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    // console.log(formik);
    // console.log(formik.values);
    console.log(formik.errors);

    // const submitHandler = (e) => {
        // console.log("submit");
        //to prevent loading, but the main reson is to prevent seeing username and password in the link
    //     e.preventDefault()
    // }

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="formControl">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <div className="error">{formik.errors.name}</div>
                    )}
                </div>
                <div className="formControl">
                    <label>Email</label>
                    <input 
                        type="text"
                        name="email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}
                </div>
                <div className="formControl">
                    <label>Password</label>
                    {/* <input type="text" name="password" value={userData.password} onChange={changeHandler} /> */}
                    <input 
                        type="text" 
                        name="password" 
                        value={formik.values.password} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <div className="error">{formik.errors.password}</div>
                    )}
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default SignUpForm