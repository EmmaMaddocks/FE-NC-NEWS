import * as api from '../utils/api'
import { useState, useEffect } from 'react'

export const useArticles = () => {

const [articles, setArticles] = useState()
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null)

useEffect(() => {
    setIsLoading(true)
    api.getArticles()
    .then((data) => {
    setArticles(data)
     setIsLoading(false)
     setError(null)
    }).catch((error) => {
        setError(error)
        setIsLoading(false)
    })
    }, [])

const reFetchData = (() => {
    setIsLoading(true)
    api.getArticles()
    .then((data) => {
        setArticles(data)
     setIsLoading(false)
     setError(null)
    }).catch((error) => {
        setError(error)
        setIsLoading(false)
    })
}, [setArticles])


return { setArticles, articles, isLoading, reFetchData, error }
}