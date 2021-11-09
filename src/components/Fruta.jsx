import React from 'react'
import { useParams } from 'react-router-dom'

function Fruta() {
    const params = useParams()
    return (
        <div>
          Você acessou a fruta {params.id}!  
        </div>
    )
}

export default Fruta
