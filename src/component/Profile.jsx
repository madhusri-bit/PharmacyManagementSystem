import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedicine } from "../redux/actions/medicineActions";
import './Profile.css'; 

const Profile = () => {
  const dispatch = useDispatch();
  const { categories, total } = useSelector((state) => state.medicine);
  const {  email, phone } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddMedicine = (category, medicineId, quantity) => {
    const medicine = categories[category].medicines.find(m => m.id === medicineId);
    if (medicine && quantity > 0) {
      dispatch(addMedicine(medicine, quantity));
    }
  };

  // Filter medicines based on search term
  const filteredCategories = Object.keys(categories).reduce((result, category) => {
    const filteredMedicines = categories[category].medicines.filter(medicine =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredMedicines.length > 0) {
      result[category] = { ...categories[category], medicines: filteredMedicines };
    }
    return result;
  }, {});

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="user-info">
        <h2>User Information</h2>
        
        <div><p>Email: {email}</p></div>
        <div><p>Phone: {phone}</p></div>
      </div>

      <h2 className="total-medicines">Total Medicines Available: {total}</h2>

      <input
        type="text"
        placeholder="Search for medicine"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {Object.keys(filteredCategories).map(category => (
        <div key={category} className="medicine-section">
          <h3>{category}</h3>
          <select id={`${category}-medicines`}>
            {filteredCategories[category].medicines.map(medicine => (
              <option key={medicine.id} value={medicine.id}>{medicine.name}</option>
            ))}
          </select>
          <input 
            type="number" 
            placeholder="Quantity" 
            id={`${category}-quantity`} 
          />
          <button onClick={() => {
            const quantity = parseInt(document.getElementById(`${category}-quantity`).value, 10);
            const medicineId = parseInt(document.getElementById(`${category}-medicines`).value, 10);
            handleAddMedicine(category, medicineId, quantity);
          }}>Add Medicine</button>
        </div>
      ))}
    </div>
  );
};

export default Profile;
