import Card from '../Card/Card'
import './Selected.css'
import { useEffect, useState } from 'react'

const Selected = () => {
    const [info, setinfo] = useState([]);
    useEffect(() => {
        fetch("https://example-data.draftbit.com/books?_limit=8")
            .then(res => res.json())
            .then(res => setinfo(res))
    })
    return (
        <div className='Selected'>
            <h1>Selected for you</h1>
            <div className="SelectedContainer">
                {info?.map(ele => {
                    return (
                        <Card key={ele.id} btn={ele.id} title={ele?.title} page={ele.num_pages} rate={ele.rating} img={ele.image_url} />
                    )
                })}
            </div>
        </div>
    )
}

export default Selected