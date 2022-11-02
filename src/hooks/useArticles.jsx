import { useEffect } from "react"
import { useState } from "react"
import axios from "axios";
const BASE_URL = "https://em-nc-news.herokuapp.com/api";

export const useArticles = () => {

        const [isLoading, setIsLoading] = useState(true);
        const [articles, setArticles] = useState(null);
        const [error, setError] = useState(null);
    
        
    
    
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/articles`)
        .then(({data:{articles}}) => {
            setArticles(articles)
            setIsLoading(false)
            setError(null)
        }).catch(({response:{data:{msg}, status}}) => {
            setError(err)
            setIsLoading(false)
        })
    }, [setArticles])

    return {articles, isLoading, error}
    
}

