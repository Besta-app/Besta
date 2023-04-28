import InputTexte from '../../components/forms/inputTexte'
import Bouton from '../../components/forms/bouton'
import CarteEvenement from '../../components/layout/carteEvenement'
import CarteAction from '../../components/layout/carteAction'
import CarteCarre from '../../components/layout/carteCarre'

function Home() {
    return (
        <div>
            <h1>Sur cette page vous retrouvez touts les components disponible dans src/components</h1>
            <h2>Ici les components dans forms</h2>
            <InputTexte title={'Ceci est un test'} placeholder="test"/>
            <Bouton texte={'bouton test'}/>
            <h2>Ici les components dans layout</h2>
            <CarteEvenement titreEvenement={'Boom Boom la fiesta'} dateEvenement={'25/05/2023'} descriptionEvenement={'oula dis moi donc c\'est la fête ici ou quoi '} imageEvenement={'https://www.theneweconomy.com/wp-content/uploads/2018/10/Fortnite.jpg'} />
            <CarteAction titreAction={'Voulez-vous ajouter votre soirée de wati bg qui tue de la night ?'} imgAction={"https://img.icons8.com/ios/200/null/add--v1.png"} lienAction={'/'}/>
            <CarteCarre/>
        </div>
    )
}

export default Home