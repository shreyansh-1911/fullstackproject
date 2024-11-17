import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url = 'http://localhost:8000';
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad',
  });

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('category', data.category);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Salad',
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="row g-3 col-lg-6 col-md-12">
        <div className="col-md-4">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <div className="d-flex flex-column align-items-center">
            <label htmlFor="image" className="w-100">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
                className="img-thumbnail"
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              className="form-control mt-2"
              required
            />
          </div>
        </div>

        <div className="col-md-8">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Type here"
            required
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={data.description}
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Write content here"
            required
          ></textarea>
        </div>

        <div className="col-sm-4">
          <label htmlFor="category" className="form-label">
            Product Category
          </label>
          <select
            id="category"
            name="category"
            value={data.category}
            onChange={onChangeHandler}
            className="form-select"
          >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>

        <div className="col-sm-4">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={data.price}
            onChange={onChangeHandler}
            className="form-control"
            placeholder="$20"
            required
          />
        </div>

        <div className="col-md-12 text-start">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
