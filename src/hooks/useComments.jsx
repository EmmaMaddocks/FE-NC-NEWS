import * as api from '../utils/api'
import { useState, useEffect } from 'react'

export const useComments = (article_id) => {

const [comments, setComments] = useState()
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null)

useEffect(() => {
    setIsLoading(true)
    api.getComments(article_id)
    .then((data) => {
     setComments(data)
     setIsLoading(false)
     setError(null)
    }).catch((error) => {
        setError(error)
        setIsLoading(false)
    })
    }, [])

const reFetchData = (() => {
    setIsLoading(true)
    api.getComments(article_id)
    .then((data) => {
     setComments(data)
     setIsLoading(false)
     setError(null)
    }).catch((error) => {
        setError(error)
        setIsLoading(false)
    })
}, [setComments])


return { setComments, comments, isLoading, reFetchData, error }
}