import React from 'react'

const FaceRecoginition = ({imageUrl}) =>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img alt='sample' src={imageUrl} width='500px' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecoginition