import React, {useEffect, useState} from 'react'
import Axios from 'axios'

function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle= props.movieInfo.title
    const moviePost= props.movieInfo.backdrop_path
    const movieRuntime= props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRuntime
    }

    useEffect(() => {
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if(response.data.success){
                    // true
                    console.log(response.data)
                    setFavoriteNumber(response.data.favoriteNumber)
                }else{
                    //false
                    alert('숫자 정보를 가져올 수 없습니다.')
                }
            })

        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
            if(response.data.success){
                // true
                console.log(response.data)
                setFavorited(response.data.favorited)
            }else{
                //false
                alert('정보를 가져오는데 실패했습니다.')
            }
        })
        
    }, [])

    const onClickFavorite = () => {
        if(Favorited) {
            Axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                if(response.data.success){
                    console.log(response.data)
                    setFavoriteNumber(FavoriteNumber-1)
                    setFavorited(!Favorited)
                }else{
                    alert('Favorite 리스트에서 지우는 것을 실패하였습니다.')
                }
            })
        }else{
            Axios.post('/api/favorite/addFavorite', variables)
                .then(response => {
                if(response.data.success){
                    console.log(response.data)
                    setFavoriteNumber(FavoriteNumber+1)
                    setFavorited(!Favorited)
                }else{
                     alert('Favorite 리스트에서 추가는 것을 실패하였습니다.')
                }
            })
        }
    }

    return (
        <div>
            <button onClick={onClickFavorite}>{Favorited? "Not Favorite": "Add to Favorite"} {FavoriteNumber} </button>
        </div>
    )
}

export default Favorite
