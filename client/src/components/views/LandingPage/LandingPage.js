import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_URL } from '../../Config';
import MainImage from './Sections/Mainimage';

function LandingPage() {

    const [movies, setmovies] = useState([])
    const [mainmovieImage, setmainmovieImage] = useState(null)

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            setmovies([response.results])
            setmainmovieImage(response.results[0])
        })
    }, [])

    // && 이거는 mainmovieImage가 null이 아닐 때 실행하라는 코드임

    return (
        <div style={{ width: '100%', margin: '0'}}>
            
            {mainmovieImage &&
                <MainImage 
                image={`${IMAGE_URL}w1280${mainmovieImage.backdrop_path}`}
                title={mainmovieImage.original_title}
                text={mainmovieImage.overview}
                />
            }

            <div style={{ width: '85%', margin: 'lrem auto'}}>

                <h2>Movie bt latest</h2>
                <hr/>

                {/* movie Grid Cards*/}

            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <button>Load More</button>
            </div>
        </div>
    )
}

export default LandingPage
