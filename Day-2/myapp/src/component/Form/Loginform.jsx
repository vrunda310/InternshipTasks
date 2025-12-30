import "./Loginform.css";
import useForm from "../../hooks/useForm";


export default function Loginform(){

   let {data:formData,handleChange,resetForm} = useForm({
        userId:"",
        userName:"",
        email:"",
        password:""
   });

    const handleSubmit =(e) =>{
        e.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

        if(!passwordRegex.test(formData.password)){
            alert("Password must be at least 8 characters long, contain at least one uppercase letter and one special character.");
            return;
        }

        alert("Form Data Submitted:", formData);
        resetForm();
    }

    

    return(
        <div className="login-form-container"> 
            <h3>Login Form</h3>
            <form onSubmit={handleSubmit}>
                <input 
                name="userId" 
                type="text" 
                placeholder="UserId"
                value={formData.userId}
                onChange={handleChange}
                required
                />
                <input 
                name="userName" 
                type="text" 
                placeholder="Username"
                value={formData.userName}
                onChange={handleChange}
                />
                <input  
                name="email" 
                type="email" 
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                />
                <input 
                name="password" 
                type="password" 
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required

                />
                <button name="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}