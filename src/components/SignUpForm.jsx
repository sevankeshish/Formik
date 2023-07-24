import { useFormik } from "formik"
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    password: ""
};

const onSubmit = (values) => {
    console.log(values);
}

// const validate = (values) =>{
//     // console.log(values);
//     let errors = {};

//     if (!values.name){
//         errors.name = "Name is Required"
//     }
//     if (!values.email) {
//         errors.email = "Email is Required"
//     }
//     if( !values.password) {
//         errors.password = "Password is Required"
//     }

//     return errors;
// }
const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid email format").required("Email is Required"),
    password: Yup.string().required("Password is Required")
})

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
        // validate,
        validationSchema,
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
                        // value={formik.values.name} 
                        // onChange={formik.handleChange} 
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps("name")}
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
                        // value={formik.values.email} 
                        // onChange={formik.handleChange} 
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps("email")}
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
                        // value={formik.values.password} 
                        // onChange={formik.handleChange} 
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps("password")}
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