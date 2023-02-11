import bonusItems from "../data/bonusItems";


export default function BonusItem({ totalAmount }) {

    
   
        if(totalAmount >= 100 && totalAmount <= 300){
            return(
                
                <li>{bonusItems[0]}</li>
            )
        } else if (totalAmount > 300 && totalAmount <= 500){
            return(
                <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                </> 
            )    
        } else if (totalAmount > 500 && totalAmount <= 1000){
            return(
                <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                    <li>{bonusItems[2]}</li>
                </> 
            )      
        } else if (totalAmount > 1000) {
            return(
                <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                    <li>{bonusItems[2]}</li>
                    <li>{bonusItems[3]}</li>
                </> 
            )      
        } else {
            return null;
        }
            
}