import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../store';

const AddProduct = () => {
  //initilixing the states
  const [productData, setProductData] = useState({
    title: '',
    category: '',
    subject: '',
    year: '',
    name: ''
  });
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  // validates the submitted data and dispatches the action
  // to save product
  const handleSubmit = (event) => {
    event.preventDefault();
    // holds the errors
    let newErrors = {};
    // validating the data and adding errors to the newError object
    if (productData.title.trim() === "") {
      newErrors.title = "Title cannot be empty";
    }
    if (productData.category.trim() === "") {
      newErrors.category ="Category cannot be empty";
    }
    if (productData.subject.trim() === "") {
      newErrors.subject  =  "subject cannot be empty";
    }
    if (isNaN(productData.year) || productData.year <= 0 || productData.year>=4 ){
      newErrors.year = "Year should be 1 to 4";
    }
    if (productData.name.trim() === "") {
      newErrors.name ="Name cannot be empty";
    }

    setErrors(newErrors);
    console.log(newErrors);
    if (JSON.stringify(newErrors) === "{}") {
      // Make API call or dispatch Redux action to save the product
      console.log('Note data:', productData);
      dispatch(addNewProduct(productData));
      setProductData({
        title: '',
        category: '',
        subject: '',
        year: '',
        name: ''
      })
    }

  }

  // maitains the input state changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Contribute</h1>
      <label className="form-label">
        Unit Name:
      </label>
      <input type="text" name="title" value={productData.title} onChange={handleChange} className="form-input"/>
      {errors.title && <p className="form-error">{errors.title}</p>}

      <label className="form-label">
        Branch:
      </label>
        <input type="text" name="category" value={productData.category} onChange={handleChange} className="form-input"/>
        {errors.category && <p className="form-error">{errors.category}</p>}
      <label className="form-label">
        Subject:
      </label>
        <input type="text" name="subject" value={productData.subject} onChange={handleChange} className="form-input"/>
        {errors.subject && <p className="form-error">{errors.subject}</p>}

      <label className="form-label">
        Year:
      </label>
        <input type="number" name="year" value={productData.year} onChange={handleChange} className="form-input"/>
        {errors.year && <p className="form-error">{errors.year}</p>}
    
      <label className="form-label">
        Your Name:
      </label>
        <input type="text" name="name" value={productData.name} onChange={handleChange} className="form-input"/>
        {errors.name && <p className="form-error">{errors.name}</p>}

      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}

export default AddProduct;

  
