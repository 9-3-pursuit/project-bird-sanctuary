import React from 'react';
import birdData from '../data/birds';
import BirdCards from '../Components/BirdCards';

const Cart = (props) => {
	const display = (birds) => {
		return birds.map((bird, index) => {
			return (
				<li key={index}>
					{bird.name} ${bird.amount}
				</li>
			);
		});
	};

	const calculateTotal = (birds) => {
		let total = 0;
		for (let i = 0; i < birds.length; i++) {
			total += birds[i].amount;
		}
		return total;
	};

	const handleBonus = (birds) => {
		let bonusArr = [];
		let total = calculateTotal(birds);

		if (total > 1000) {
			bonusArr.push(<li>{'Stickers'}</li>);
			bonusArr.push(<li>{'Background for your computer'}</li>);
			bonusArr.push(<li>{'Tote bag'}</li>);
			bonusArr.push(<li>{'Invites to VIP live streams'}</li>);
		} else if (total >= 500) {
			bonusArr.push(<li>{'Stickers'}</li>);
			bonusArr.push(<li>{'Background for your computer'}</li>);
			bonusArr.push(<li>{'Tote bag'}</li>);
		} else if (total >= 300) {
			bonusArr.push(<li>{'Stickers'}</li>);
			bonusArr.push(<li>{'Background for your computer'}</li>);
		} else if (total >= 100) {
			bonusArr.push(<li>{'Stickers'}</li>);
		}
		return bonusArr;
	};
    <div className='birdsCart'>
        return (
			<h4>Total: ${`100`}</h4>
			<ol>{display(props.addBird)}</ol>
			<ul>{handleBonus(props.addBird)}</ul>
			<BirdCards />
		</div>
	);
};
export default Cart;
