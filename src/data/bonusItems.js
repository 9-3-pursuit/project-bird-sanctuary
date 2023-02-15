const bonusItems = [
  "Stickers",
  "Background for your computer",
  "Tote bag",
  "Invites to VIP live streams",
];

function Bonus({ total }) {
  let addBonus = []
  if ((total >= 100) & (total < 300)) {
    addBonus = [...addBonus, bonusItems[0]]
  } if ((total >= 300) & (total < 500)) {
    addBonus = [...addBonus, bonusItems[0], bonusItems[1]]
  } if ((total >= 500) & (total <= 1000)) {
    addBonus = [...addBonus, bonusItems[0], bonusItems[1], bonusItems[2]]
  } if ((total > 1000)) {
    addBonus = [...addBonus, bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]]
  }
  return (
    <ul>
      {addBonus.map((bonus, index) => <li key={index} className="Cart">{bonus}</li>)}
    </ul>

  )

}



export default Bonus;
