const bonusItems = [
  "Stickers",
  "Background for your computer",
  "Tote bag",
  "Invites to VIP live streams",
];


function BonusItems({cart}) {
let bonusitems = []
 if ((cart.total >= 100) & (cart.total <300)) {
  bonusitems = [...bonusitems,bonusItems[0]]
  }
  if ((cart.total >= 300) & (cart.total <500)) {
    bonusitems = [...bonusitems,bonusItems[0],bonusItems[1]]
  }
  if ((cart.total >= 500) & (cart.total <=1000)) {
    bonusitems= [...bonusitems,bonusItems[0],bonusItems[1],bonusItems[2]]
  }
  if (cart.total > 1000)  {
    bonusitems = [...bonusitems,bonusItems[0],bonusItems[1],bonusItems[2],bonusItems[3]]
  }
  
    return (
    <ul> 
          { bonusitems.map((b,i) => <li key={i} className="Cart">{b}</li>)}
         
          
         </ul>
   )
    }
      
export default BonusItems;
