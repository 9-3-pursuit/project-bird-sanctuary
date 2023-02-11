import bonusItems from "../data/bonusItems";

export default function BonusItem({ totalAmount }) {

        return(
            <div className="bonusItems">
                {totalAmount >= 100 ? (
                    <li className="bonusItem">{bonusItems[0]}</li>
                ) : null}
                {totalAmount >= 300 ? (
                    <li className="bonusItem">{bonusItems[1]}</li>
                ) : null}
                {totalAmount >= 500 ? (
                    <li className="bonusItem">{bonusItems[2]}</li>
                ) : null}
                {totalAmount >= 1000 ? (
                    <li className="bonusItem">{bonusItems[3]}</li>
                ) : null}
            </div>
        )   
}