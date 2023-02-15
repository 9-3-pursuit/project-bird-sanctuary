import bonusItems from "../data/bonusItems";

function BonusItem ( {finalPrice } ) {

    return(
        <div>
            {finalPrice >= 100 && (<li>{bonusItems[0]}</li>)}

            {finalPrice >= 300 && (<li>{bonusItems[1]}</li>)}

            {finalPrice >= 500 && (<li>{bonusItems[2]}</li>)}

            {finalPrice >= 1000 && (<li>{bonusItems[3]}</li>)}

        </div>
    )   
}
export default BonusItem