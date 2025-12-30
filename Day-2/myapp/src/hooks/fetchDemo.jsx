import {useFetch} from './useFetch';

export default function FetchDemo({url}){

    const { data, loading, error } = useFetch(url || "https://jsonplaceholder.typicode.com/posts");

    if(loading ) return <p>Loading...</p> 
    if(error ) return <p style={{color:" red "}}>Error: {error}</p> 

    return(
        <div>
            <h3> Fetch Data </h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
