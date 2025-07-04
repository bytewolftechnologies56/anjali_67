import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showFranchiseForm, setShowFranchiseForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    pincode: '',
    address: ''
  });

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Franchise Form Data:', formData);
    alert('Franchise request submitted!');
    setShowFranchiseForm(false);
    setFormData({ name: '', email: '', city: '', pincode: '', address: '' });
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-black/90 text-white font-oswald px-4 sm:px-8 shadow-md backdrop-blur h-20">
        <div className="flex items-center justify-between h-full font-medium">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase">Force Sales</h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-5 text-sm">
            {['/', '/collection', '/about', '/contact'].map((path, i) => (
              <NavLink
                key={path}
                to={path}
                className="flex flex-col items-center gap-1 hover:text-gray-300"
              >
                <p>{['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}</p>
              </NavLink>
            ))}

            {/* Franchise Button */}
            <button
              onClick={() => setShowFranchiseForm(true)}
              className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-full text-xs font-semibold transition-all"
            >
              Are you Franchise?
            </button>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <img
              onClick={() => {
                setShowSearch(true);
                navigate('/collection');
              }}
              src={assets.search_icon}
              className="w-5 cursor-pointer invert"
              alt="Search"
            />

            {/* Profile */}
            <div className="group relative">
              <img
                onClick={() => (token ? null : navigate('/login'))}
                className="w-5 cursor-pointer invert"
                src={assets.profile_icon}
                alt="Profile"
              />
              {token && (
                <div className="hidden group-hover:block absolute right-0 pt-4 z-50">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-gray-800 text-white rounded shadow">
                    <p className="cursor-pointer hover:text-gray-300">My Profile</p>
                    <p
                      onClick={() => navigate('/orders')}
                      className="cursor-pointer hover:text-gray-300"
                    >
                      Orders
                    </p>
                    <p onClick={logout} className="cursor-pointer hover:text-gray-300">
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-5 min-w-5 invert" alt="Cart" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </Link>

            {/* Mobile Menu Icon */}
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className="w-5 cursor-pointer sm:hidden invert"
              alt="Menu"
            />
          </div>
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-40 bg-black text-white overflow-hidden transition-all duration-300 ease-in-out ${
            visible ? 'w-full sm:w-64' : 'w-0'
          }`}
        >
          <div className="flex flex-col h-full">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-4 cursor-pointer border-b border-gray-700"
            >
              <img className="h-4 rotate-180 invert" src={assets.dropdown_icon} alt="Back" />
              <p>Back</p>
            </div>
            {['/', '/collection', '/about', '/contact'].map((path, i) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setVisible(false)}
                className="py-3 pl-6 border-b border-gray-700 hover:text-gray-300"
              >
                {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setVisible(false);
                setShowFranchiseForm(true);
              }}
              className="py-3 pl-6 text-left border-b border-gray-700 hover:text-gray-300"
            >
              FRANCHISE
            </button>
          </div>
        </div>
      </div>

      {/* Franchise Form Modal */}
      {showFranchiseForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="bg-white text-black rounded-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowFranchiseForm(false)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Franchise Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded resize-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
