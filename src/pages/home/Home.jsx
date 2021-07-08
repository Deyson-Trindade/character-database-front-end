import React from 'react'
import Img1 from '../../imgs/macaco.jpg'


const Home = () => {

    

    return (
        <body>
            <img src={Img1} style={{ position: 'relative', backgroundSize: 'cover', width: '100%', backgroundPosition: 'center'}} alt="imagem de fundo" />

        </body>
    )
}

export default Home