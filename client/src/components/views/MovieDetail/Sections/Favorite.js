import React, {useEffect} from 'react'
import Axios from 'axios'

function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle= props.movieInfo.title
    const moviePost= props.movieInfo.backdrop_path
    const movieRuntime= props.movieInfo.runtime

    useEffect(() => {
        let variables = {
            userFrom,
            movieId
        }
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if(response.data.success){
                    // true
                    console.log(response.data)
                }else{
                    //false
                    alert('숫자 정보를 가져올 수 없습니다.')
                }
            })
    }, [])

    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite
