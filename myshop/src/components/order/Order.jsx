import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Order.scss';

const Order = ({setOrderDetails}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [products, setProducts] = useState([{ name: '', quantity: '', price: '' }]);
    const navigate = useNavigate();
  
    const handleAddProduct = () => {
      setProducts([...products, { name: '', quantity: '', price: '' }]);
    };
  
    const handleProductChange = (index, field, value) => {
      const updatedProducts = [...products];
      updatedProducts[index][field] = value;
      setProducts(updatedProducts);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setOrderDetails({ name, email, mobile, address, products });
      navigate('/checkout');
    };
  
    return (
      <div className="order-form-container">
        <h2>Order Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
  
          <h3>Products</h3>
          {products.map((product, index) => (
            <div key={index} className="product-input">
              <input
                type="text"
                placeholder="Product Name"
                value={product.name}
                onChange={(e) => handleProductChange(index, 'name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={product.quantity}
                onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
              />
              <input
                type="number"
                placeholder="Price"
                value={product.price}
                onChange={(e) => handleProductChange(index, 'price', e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddProduct}>Add Product</button>
          <button type="submit">Submit Order</button>
        </form>
      </div>
    );
}

export default Order
