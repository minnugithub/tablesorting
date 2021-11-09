import React, { useState, Fragment } from 'react'
import AddItemForm from './AddItemForm'
import EditItemForm from './EditItemForm'
import {Table} from './ItemTable'
import "./styles.css"


const App = () => {


	const columns = [
	  { accessor: 'id', label: 'Id' },
	  { accessor: 'item', label: 'Item' },
	  { accessor: 'description', label: 'Description', },
	  { accessor: 'price', label: 'Price' },
	  { accessor: 'quantity', label: 'Qty' },
	  { accessor: 'date', label: 'Date' },
	 
	  
	]
  
	  //Creating Datas
	  const Data = [
		  { id: 1, item: 'Shirt', description: 'cotton' , price:1999 , quantity :5 ,date:'23/02/2021'},
		  { id: 2, item: 'Jeans', description: 'levis' , price:899 , quantity :2 ,date:'12/06/2020'},
		  { id: 3, item: 'Churidar', description: 'Georget' , price:299 , quantity :5 ,date:'28/10/2019'},
	  { id: 4, item: 't-shirt', description: 'tshirt' , price:999 , quantity :5 ,date:'04/07/2021'},
	  { id: 5, item: 'Kurtha', description: 'cotton' , price:499 , quantity :3 ,date:'16/04/2021'},
	  { id: 6, item: 'Saree', description: 'khadhi' , price:3450 , quantity :2 ,date:'12/03/2020'},
	  ]
  
	  const initialFormState = { id: null, item: '', description: '' ,price:null, quantity:null,date:''}
  
	  
	  const [ items, setItems ] = useState(Data)
	  const [ currentItem, setCurrentItem ] = useState(initialFormState)
	  const [ editing, setEditing ] = useState(false)
  
	  // CRUD operations
	  const addItem = item => {
		  item.id = items.length + 1
		  setItems([ ...items, item ])
	  }
  
	  const deleteItem = id => {
		  setEditing(false)
  
		  setItems(items.filter(item => item.id !== id))
	  }
  
	  const updateItem = (id, updatedItem) => {
		  setEditing(false)
  
		  setItems(items.map(item => (item.id === id ? updatedItem : item)))
	  }
  
	  const editRow = item => {
		  setEditing(true)
  
		  setCurrentItem({ id: item.id, item: item.item, description: item.description,price:item.price,quantity:item.quantity,date:item.date })
	  }
  
	  return (
		  <div class="App" >
			  <h1>High Fashions </h1>
			  <div className="flex-row">
				  <div className="flex-large">
					  {editing ? (
						  <Fragment>
							  <h2>Edit Item</h2>
							  <EditItemForm
								  editing={editing}
								  setEditing={setEditing}
								  currentItem={currentItem}
								  updateItem={updateItem}
							  />
						  </Fragment>
					  ) : (
						  <Fragment>
							  <h2>Add Items</h2>
							  <AddItemForm addItem={addItem} />
						  </Fragment>
					  )}
				  </div>
				  <div className="flex-large">
					  <h2>View users</h2>
					  {/* <ItemTable items={items} editRow={editRow} deleteItem={deleteItem} /> */}
			<Table rows={items} columns={columns} editRow={editRow} deleteItem={deleteItem} />
				  </div>
			  </div>
		  </div>
	  )
  }
  
  export default App