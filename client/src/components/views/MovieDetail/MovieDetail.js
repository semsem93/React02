import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/Mainimage';
import MovieInfo from './Sections/MovieInfo';
import GridCard from '../commons/GridCards';
import { Row } from 'antd';

function MovieDetail(props) {

    let movieId = props.match.params.movieId;
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActoerToggle, setActoerToggle] = useState(false)

    useEffect(() => {
    
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response)
            })

        fetch(endpointCrew)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setCasts(response.cast)
        })

    }, [])

    const toggleActoerView = () => {
        setActoerToggle(!ActoerToggle)
    }

    return (
        <div>
            <MainImage 
                image={`${IMAGE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
            />

             {/* body */}
            <div style={{ width: '85%', margin: '1rem auto'}}>
                
                {/* movie info */}
                <MovieInfo
                    movie={Movie}
                />

                <br />

                {/* actors grid */}

                <div style={{display:'flex', justifyContent: 'center', margin: '2rem'}}>
                    <button onClick={toggleActoerView}> Toggle Actor View </button>
                </div>
                {ActoerToggle &&
                    <Row gutter={[16, 16]}>
                        {Casts && Casts.map((cast, index) => (
                            <React.Fragment key={index}> 
                                <GridCard
                                    image={cast.profile_path ?
                                        `${IMAGE_URL}w500${cast.profile_path}` : null }
                                    characterName={cast.name}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                }
            </div>
        </div>
    )
}

export default MovieDetail
