import * as api from '../utils/api'
import { useState, useEffect } from 'react'

export const useComments = (article_id) => {

const [comments, setComments] = useState()
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setIsLoading(true)
    api.getComments(article_id)
    .then((data) => {
     setComments(data)
     setIsLoading(false)
    })
}, [])

const reFetchData = (() => {
    setIsLoading(true)
    api.getComments(article_id)
    .then((data) => {
     setComments(data)
     setIsLoading(false)
    })
}, [setComments])


return { setComments, comments, isLoading, reFetchData }
}