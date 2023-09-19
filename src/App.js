// import './App.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown.js"

function App() {

  const [data, setData] = useState([])
  const [tempFormData, setTempFormData] = useState({
    name: "",
    phone: "",
    address: ""
  })
  const [allColor, setAllColor] = useState(["red", "blue", "green"]);
  const [selectedColor, setSelectedColor] = useState('Select Color')

  function handleUpdateData(e, tempFormData) {
    e.preventDefault()
    setData([
      ...data,
      {
        name: tempFormData.name,
        phone: tempFormData.phone,
        address: tempFormData.address
      }
    ])
    setTempFormData({
      name: "",
      phone: "",
      address: ""
    })
  }

  function handleDataChange(e) {
    if (e.target.name === 'name') {
      setTempFormData(
        {
          ...tempFormData,
          name: e.target.value
        }
      )
    }
    if (e.target.name === 'phone') {
      setTempFormData(
        {
          ...tempFormData,
          phone: e.target.value
        }
      )
    }
    if (e.target.name === 'address') {
      setTempFormData(
        {
          ...tempFormData,
          address: e.target.value
        }
      )
    }

  }

  function handleColorChange(color) {
    setSelectedColor(color);
  }


  return (
    // <div className='container' style={{ backgroundColor: selectedColor }}>
    <div 
      className='container d-flex justify-content-center align-items-center'
    >
      <form 
        style={{ backgroundColor: selectedColor }}
        className="p-3 mt-3 border border-secondary rounded"
      >
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleDataChange}
            className='form-control form-control-lg'
            // className='form-control-plaintext'
            value={tempFormData.name}
            placeholder='John Wick'
          // readOnly
          />
          <div className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='phone' className='form-label'>Phone</label>
          <input
            type='number'
            id='phone'
            name="phone"
            onChange={handleDataChange}
            className='form-control'
            value={tempFormData.phone}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='address' className='form-label'>Address</label>
          <input
            type='text'
            id='address'
            name="address"
            onChange={handleDataChange}
            className='form-control'
            value={tempFormData.address}
          />
        </div>
        <select
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className='form-select mb-3'
        >
          <option key='white' value='white'>Select Color</option>
          {
            allColor.map(color =>
              <option
                key={color}
              >
                {color}
              </option>)
          }
        </select>
        <div className='text-center' >
          <button
            className='btn btn-primary btn-lg'
            onClick={(e) => handleUpdateData(e, tempFormData)}
            type='submit'
          >
            Submit
          </button>
        </div>

        {/* Using bootstrap dropdowm -  by importing the js bootstrap plugin at the top */}        {/* <div className='dropdown pb-3'>
          <button 
            className='btn btn-secondary dropdown-toggle'
            type='button'
            data-bs-toggle="dropdown"
            
          >
            {selectedColor}
          </button>
          <ul className='dropdown-menu'>
            {allColor.map( color => (
              <li>
                <button
                  className='dropdown-item'
                  type='button'
                  onClick={(e) => handleColorChange(e.target.textContent)}
                  // value={color}
                >
                  {color}
                </button>
              </li>
            ))}
          </ul>
        </div> */}
      </form>
    </div>
  );
}


export default App;