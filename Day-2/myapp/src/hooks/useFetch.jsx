import { useState } from "react";
import { useEffect } from "react";

function useFetch(url){

    const[data,setData] = useState(null);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);


    useEffect(() => {

        setLoading(true);

        fetch(url)
        .then(res => {
            if( !res.ok){
                throw new Error("somthing went wrong");
            }else{
                return res.json();
            }
        })
        .then( result =>{
            setData(result);
            setLoading(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        })
    }, [url])

    return { data, loading, error };
}
export { useFetch };