import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const url = 'http://localhost:8000';
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.data) {
      setList(response.data.data);
    } else {
      toast.error('Error fetching the food list');
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error('Error removing the food item');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Foods List</h2>
      <div className="table-responsive">
        <div className="list-header text-center p-2" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="row">
            <div className="col">Image</div>
            <div className="col">Name</div>
            <div className="col">Category</div>
            <div className="col">Price</div>
            <div className="col">Action</div>
          </div>
        </div>
        {list.map((item, index) => (
          <div key={index}>
            <div className="row text-center align-items-center py-3">
              <div className="col">
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  style={{ width: '50px', height: '40px', objectFit: 'cover' }}
                />
              </div>
              <div className="col">{item.name}</div>
              <div className="col">{item.category}</div>
              <div className="col">${item.price}</div>
              <div className="col">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFood(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <hr className="my-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
