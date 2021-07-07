import React from 'react'
import NewsSlider from '../Widgets/NewsSlider'

const Home = () => {
    return (
        <div>
           <NewsSlider
                type='featured'
                start={3}
                amount={6}
                settings={{
                    dots:false
                }}
           />
        </div>
    )
}

export default Home
