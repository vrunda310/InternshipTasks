import { useState } from "react";

 function useForm(initialValue){
    const [data,setData] = useState(initialValue);

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const resetForm = () => {
        setData(initialValue);
    }

    return{data,handleChange,resetForm};
}
export default useForm;