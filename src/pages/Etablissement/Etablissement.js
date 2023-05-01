import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import {Loader} from "../../utils/styles"

function Etablissement(){

    /*recupere l'id de l'etablissement dans l'url*/
    const { id } = useParams()
    console.log(id)

    /*on déclare le loader*/
    const [loading, setLoading] = useState(true)

    /*recupere les infos de l'etablissement*/
    const [etablissement, setEtablissement] = useState([])
    useEffect(() => {
        /*url à changer en fonction de l'api*/
        fetch(`http://localhost:8000/etablissement/${id}`)
        .then((res) => res.json())
        .then((data) => setEtablissement(data))
    }, [])


    return(
        <div>
            <Loader></Loader>
            <h1>Etablissement</h1>
        </div>
    )
}

export default Etablissement