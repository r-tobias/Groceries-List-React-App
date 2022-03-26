import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus} from '@fortawesome/free-solid-svg-icons';

const App = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been purchased, and a quantity
	const [items, setItems] = useState([
		{ itemName: 'Apple', brand: 'Motts', units: '1 lb', quantity: 12, isPurchased: false },
		{ itemName: 'Orange', brand: 'Motts', units: '2 lb', quantity: 4, isPurchased: true },
		{ itemName: 'Mango', brand: 'Mottsa', units: '3 lb', quantity: 7, isPurchased: false },
	]);
	
	const [inputValue, setInputValue] = useState("");
	const [totalItemCount, setTotalItemCount] = useState(0);
	const handleAddButtonClick = () => {
		const newItem = { 
			itemName: inputValue, 
			quantity: 1, 
			isPurchased: false 
		}
		//take a new copy of the current array and add the new item
		const newItems = [...items, newItem];
		//save it to the state
		setItems(newItems);
		setInputValue("") // resets the input value so user does not have to manually delete every time
	}
	const handleQuantityIncrease = (index) => {
		//passing in index as parameter to identify which item we want to increase since there are more than one of the same button
		//good practice to make copies of the array to avoid mutating the state
		const newItems = [...items];
		//get the object using the index and incrementing the value of quantity
		newItems[index].quantity++;
		setItems(newItems); // triggers the re-render
		calculateTotal();

	}
	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		setItems(newItems); 
		calculateTotal();

	}
	const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isPurchased = !newItems[index].isPurchased
		setItems(newItems);
	}
	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			 return total + item.quantity;
		}, 0)
		setTotalItemCount(totalItemCount)
	}

	const handleRemove = (e) => {
		const itemName = e.target.getAttribute("name")
		setItems(items.filter(item => item.itemName !== itemName))

	}

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value = {inputValue} onChange ={(event)=> setInputValue(event.target.value)}  className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick = {() => handleAddButtonClick()} />
				</div>
				<div className='item-list'>
					{items.map((item, index)=>(					
					<div className='item-container'>
							<div className='quantity'>
							<button>
								<FontAwesomeIcon icon={faChevronLeft} onClick = {()=> handleQuantityDecrease(index)}/>
							</button>
							<span> {item.quantity}</span>
							<button>
								<FontAwesomeIcon icon={faChevronRight} onClick = {()=> handleQuantityIncrease(index)}/>
							</button>
						</div>
						<div className='item-name' onClick={() => toggleComplete(index)}>
							{/* HINT: replace false with a boolean indicating the item has been purchased or not */}
							{item.isPurchased ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>{item.itemName}</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>{item.itemName}</span>
								</>
							)}
						</div>
						
					
						<div className='delete'>
							<button className='remove-button' name = {item.itemName} onClick={handleRemove}>X</button>
							
							</div>
					</div>
						))}

				</div>
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default App;
