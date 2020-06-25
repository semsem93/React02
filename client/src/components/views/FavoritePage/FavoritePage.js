import React, { useEffect, useState } from 'react'
import './favorite.css'
import Axios from 'axios'
import { Popover } from 'antd'
import { IMAGE_URL } from '../../Config'

function FavoritePage() {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {
        fetchFavoredMovie()
    }, [])

    const fetchFavoredMovie = () => {
        Axios.post('api/favorite/getFavoredMovie', {userFrom: localStorage.getItem('userId')})
         .then(response =>{
             if(response.data.success){
                console.log(response.data)
                setFavorites(response.data.favorites)
             }else{
                 alert("영화 정보를 가져오는데 실패했습니다.")
             }
         })
    }

    const RomoveFavorite = (movieId, userFrom) => {
        const variables = {
            movieId,
            userFrom
        }
        Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                if(response.data.success){
                    console.log(response.data)
                    fetchFavoredMovie()
                }else{
                    alert("리스트에서 지우는데 실패하였습니다.")
                }
            })
    }

    const renderCards = Favorites.map((favorite, index) => {
        const content = (
            <div>
                {favorite.moviePost ? 
                <img src={`${IMAGE_URL}w500${favorite.moviePost}`}/> : "no image"}
            </div>
        )

        return (
        <tr key={index}>
            <Popover content={content} title={`${favorite.movieTitle}`}>
                <td>{favorite.movieTitle}</td>
            </Popover>
            <td>{favorite.movieRunTime} mins</td>
            <td><button onClick={() => RomoveFavorite(favorite.movieId, favorite.userFrom)}>Remove</button></td>
        </tr>)
    })

    return (
        <div style={{width: '85%', margin: '3rem auto'}}>
            <h2> Favorite Movies</h2>
            <hr/>

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie Runtime</th>
                        <th>Romove from favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCards}
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
