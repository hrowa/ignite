import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
//Redux
import {useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {smallImage} from '../util'
//IMAGES
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
//Star Images
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

// import getArray from '../components/array'


const GameDetail = ({pathId}) => {
    const history = useHistory();
    //Exit Detail
    const exitDetailHandler = (e) =>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow ='auto';
            history.push('/')
        }
    };

    //Get Stars
    const getStars =() => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++){
            if (i <= rating){
                stars.push(<img alt="star" key={i} src={starFull}></img>)
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    }

    //Get platform images
    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox one":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default: return gamepad
        }
    }

    const getStoresUrl = (stores) => {
        switch (stores) {
            case "PlayStation 4":
                return playstation;
            case "Xbox one":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default: return gamepad
        }
    }
    
   
    //Data
    const {screen, game, isLoading} = useSelector((state) => state.detail);

    // const storesUrl = {...game.stores.map((url) =>
    //             console.log(storesUrl)
    //     )}

    return(
        <>
        {!isLoading &&(
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        {/* <a href={game.stores.map((storesUrl) => (
                            storesUrl.url
                            ))}  > */}
                          <Platforms>
                        {game.platforms.map((data) => (
                                <img
                                    key={data.platform.id} 
                                    src={getPlatform(data.platform.name)} 
                                    alt={data.platform.name}>
                                </img>
                                ))}
                          </Platforms>
                        {/* </a> */}
                        
                    </Info>
                </Stats>
                <Media>
                    <img src={smallImage(game.background_image, 1280)} alt="background" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map((screen) => (
                        <motion.img 
                        // layoutId={`image ${pathId}`} 
                        src={smallImage(screen.image, 1280)} 
                        key={screen.id} 
                        alt="game"/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    )
};

const CardShadow = styled(motion.div)`
width: 100%;
min-height: 100vh;
overflow-y: scroll;
background: rgba(0,0,0,0.5);
position: fixed;
top: 0;
left: 0;
z-index: 5;
&::-webkit-scrollbar-thumb {
    background-color: #ff7676;
}

&::-webkit-scrollbar-track{
    background: white;
}
`;

const Detail = styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 20rem;
background: white;
position: absolute;
left: 10%;
color: black;
z-index: 10;
img{
    width: 100%;
}
`;

const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
img{
    width: 2rem;
    height: 2rem;
    display: inline;
}
`;

const Info = styled(motion.div)`
text-align: center;
`;

const Platforms = styled(motion.div)`
display: flex;
justify-content: space-evenly;
img{
    margin-left: 3rem;
}
`;

const Media = styled(motion.div)`
margin-top: 5rem;
img {
    width: 100%;
    }
`;

const Description = styled(motion.div)`
margin: 5rem 0rem;
`

export default GameDetail;