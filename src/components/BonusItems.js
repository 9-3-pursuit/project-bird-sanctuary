const bonusItems = [
  "Stickers",
  "Background for your computer",
  "Tote bag",
  "Invites to VIP live streams",
];


function BonusItems({cart}) {
  



  let tempbonus = []
 

  if ((cart.total >= 100) & (cart.total <300)) {
    tempbonus = [...tempbonus,bonusItems[0]]
  }
  if ((cart.total >= 300) & (cart.total <500)) {
    tempbonus = [...tempbonus,bonusItems[0],bonusItems[1]]
  }
  if ((cart.total >= 500) & (cart.total <=1000)) {
    tempbonus = [...tempbonus,bonusItems[0],bonusItems[1],bonusItems[2]]
  }
  if (cart.total > 1000)  {
    tempbonus = [...tempbonus,bonusItems[0],bonusItems[1],bonusItems[2],bonusItems[3]]
  }


      
     
   return (
    <ul> 
          { tempbonus.map((b,i) => <li key={i} className="Cart">{b}</li>)}
         
          
         </ul>
   )
    }
      
      
   
  


export default BonusItems;
