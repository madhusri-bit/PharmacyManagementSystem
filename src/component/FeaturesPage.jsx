import React from 'react';
import './FeaturesPage.css';

function FeaturesPage() {
  return (
    <div className="features-page">
      <h1>MediTrack Features </h1>
      <div className="feature-container">
        <div className="feature-item">
          <img src="https://media.istockphoto.com/id/1608041378/photo/pharmacist-using-a-digital-tablet-to-do-inventory-in-a-pharmacy.webp?a=1&b=1&s=612x612&w=0&k=20&c=51F8bFze2BqFakfXdaQ5PZqbuN5yr9GwZPXrt6EHtVI=" alt="Inventory Management" />
          <h2>Inventory Management</h2>
          <p>Real-time tracking and efficient stock management ensure that your pharmacy never runs out of essential items. Manage your stock levels, view historical data, and receive notifications for low inventory.</p>
        </div>
        <div className="feature-item">
          <img src="https://media.istockphoto.com/id/669638328/photo/doctor-and-patient.jpg?s=2048x2048&w=is&k=20&c=gDNlN589atBzRXhzZbTQVvxu2t1NdVaiIZLPL829i_w=" alt="Prescription Management" />
          <h2>Prescription Management</h2>
          <p>Streamline prescription processing with our easy-to-use interface. Quickly validate, manage, and refill prescriptions, and maintain detailed records of all transactions for efficient patient care.</p>
        </div>
        <div className="feature-item">
          <img src="https://media.istockphoto.com/id/1739325597/photo/nurse-senior-woman-and-smile-with-comfort-holding-hands-or-support-in-nursing-home-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=2vYJgj7R-O6mQfBUR3u3qnJwHdZ3LHWYXterBRgtC-g=" alt="Patient Management" />
          <h2>Patient Management</h2>
          <p>Access comprehensive patient records with just a few clicks. Manage patient profiles, track medical history, and schedule appointments, all from a unified platform designed for efficiency.</p>
        </div>
        <div className="feature-item">
          <img src="https://media.istockphoto.com/id/1689003176/photo/medical-technology-doctor-holding-health-icon-with-dna-electronic-medical-record-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=keOJMNvZUxOR8yjCOHqPMnRnwnfnUQ84BUs9SlQkkig=" alt="Reporting & Analytics" />
          <h2>Reporting & Analytics</h2>
          <p>Gain insights into your pharmacy’s performance with detailed reports and analytics. Track sales, monitor inventory levels, and analyze trends to make informed decisions and optimize operations.</p>
        </div>
        <div className="feature-item">
          <img src="https://media.istockphoto.com/id/1175811131/photo/health-care-billing-statement.webp?a=1&b=1&s=612x612&w=0&k=20&c=T7jRhml8hgy_84U8e_Y7Fpq58vt5YQZRYSQ7ztK6J_o=" alt="Billing & Payments" />
          <h2>Billing & Payments</h2>
          <p>Manage billing and payment processes seamlessly with multiple payment options. Generate invoices, process payments, and track financial transactions to ensure accurate and timely billing.</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesPage;
