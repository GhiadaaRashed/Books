import React from 'react'
import { useEffect, useState } from 'react';
import AboutBook from '../AboutBook/AboutBook'
import {useParams} from 'react-router-dom'

const Book=({theme})=> {
    const { id } = useParams()
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch(`https://example-data.draftbit.com/books/${id}`)
            .then(res => res.json())
            .then(res=> setdata(res))
    }, [])
    return (
        <div>
            <AboutBook theme={theme} image_url={data.image_url } title={data.title } authors={data.authors } description={ data.description} num_pages={data.num_pages} rating_count={data.rating_count} review_count={data.review_count}/>
        </div>
    )
}
export default Book;