import axios from "axios";
import { useState, useEffect } from "react";


const AnimeList = () => {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try{
        const response = await axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1");
        console.log(response.data.top);
        setLoading(false);
        }catch(error){       
        console.error(error);
            setAnimeList(error.response.data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    if(loading){
        return <h1>Loading...</h1>
    }    
    
    return (
        <div>
            <h1>animeList</h1>

            <pre>{JSON.stringify(animeList, null, 2)}</pre>

            

        </div>
    )
}


export default AnimeList
