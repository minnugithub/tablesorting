import React, { useState } from 'react'
import './styles.css';


const AddItemForm = props => {
	const initialFormState = { id: null, item: '', description: '',price: null,quantity:'',date:'' }
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<form  className=" container"
			onSubmit={event => {
				event.preventDefault()
				if (!item.item || !item.description) return

				props.addItem(item)
				setItem(initialFormState)
			}}
		>
     	 <label class="input">Id</label>
			<input type="text" name="id" class="input" value={item.id} onChange={handleInputChange} />
			<label class="input">Item Name</label>
			<input type="text" name="item"class="input"  value={item.item} onChange={handleInputChange} />
			<label class="input">Description</label>
			<input type="text" name="description" class="input" value={item.description} onChange={handleInputChange} />
   		   <label class="input">Price</label>
			<input type="text" name="price" class="input" value={item.price} onChange={handleInputChange} />
     	 <label class="input">Quantity</label>
			<input type="text" name="quantity" class="input"  value={item.quantity} onChange={handleInputChange} />
     	 <label class="input">Stock Received Date</label>
			<input type="text" name="date" class="input" value={item.date} onChange={handleInputChange} />
			<button class="input">Add new item </button>
		</form>
	)
}

export default AddItemForm