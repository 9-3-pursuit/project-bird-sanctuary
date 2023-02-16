import bonusItems from "../data/bonusItems";

export default function BonusItem({ totalAmount }) {

        return(
            <div className="bonusItems">
                {totalAmount >= 100 && (
                    <li className="bonusItem">{bonusItems[0]}</li>
                )}
                {totalAmount >= 300 && (
                    <li className="bonusItem">{bonusItems[1]}</li>
                )}
                {totalAmount >= 500 && (
                    <li className="bonusItem">{bonusItems[2]}</li>
                )}
                {totalAmount >= 1000 && (
                    <li className="bonusItem">{bonusItems[3]}</li>
                )}
            </div>
        )   
}