const bonusItems = [
  "Stickers",
  "Background for your computer",
  "Tote bag",
  "Invites to VIP live streams",
];


function BonusItems({cart4Bird}) {
let tempOrBonus4Bird = []
 if ((cart4Bird.total >= 100) & (cart4Bird.total <300)) {
    tempOrBonus4Bird = [...tempOrBonus4Bird,bonusItems[0]]
  }
  if ((cart4Bird.total >= 300) & (cart4Bird.total <500)) {
    tempOrBonus4Bird = [...tempOrBonus4Bird,bonusItems[0],bonusItems[1]]
  }
  if ((cart4Bird.total >= 500) & (cart4Bird.total <=1000)) {
    tempOrBonus4Bird = [...tempOrBonus4Bird,bonusItems[0],bonusItems[1],bonusItems[2]]
  }
  if (cart4Bird.total > 1000)  {
    tempOrBonus4Bird = [...tempOrBonus4Bird,bonusItems[0],bonusItems[1],bonusItems[2],bonusItems[3]]
  }
  
    return (
    <ul> 
          { tempOrBonus4Bird.map((b,i) => <li key={i} className="Cart">{b}</li>)}
         
          
         </ul>
   )
    }
      
export default BonusItems;
