'use client';

import { useState } from 'react';
import styles from '@/app/create-address/ClientComponent.module.css';

export default function CreateAddressClient({ userId }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    pincode: '',
    mobile: '',
    addressName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/address/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, userId }),
      });
  
      if (response.ok) {
        alert('Address saved successfully!');
      } else {
        const errorData = await response.json();
        alert(`Failed to save address: ${errorData.error} \nDetails: ${errorData.details}`);
    }
    } catch (error) {
      console.error('Error saving address:', error);
      alert('An unexpected error occurred');
    }
  };
  

  return (
    <section className="checout-area page-paddings">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="checkout-title">
              <h3 className="theme-title">Save Address</h3>
            </div>
            <div className="checkout-fom-box">
              <form className="needs-validation" novalidate onSubmit={handleSubmit}>
                {/* Form Fields */}
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="firstName">First name</label>
                      <input type="text" className="form-control" id="firstName" onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="lastName">Last name</label>
                      <input type="text" className="form-control" id="lastName" onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="address1">Address Line 1</label>
                      <input type="text" className="form-control" id="address1" onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="address2">Address Line 2</label>
                      <input type="text" className="form-control" id="address2" onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-5 col-sm-4 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="country">Country</label>
                      <select className="form-control custom-select" id="country" onChange={handleChange} required>
                        <option value="">Choose...</option>
                        <option>United States</option>
                        <option>India</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="state">State</label>
                      <select className="form-control custom-select" id="state" onChange={handleChange} required>
                        <option value="">Choose...</option>
                        <option>California</option>
                        <option>Maharashtra</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="pincode">Pincode</label>
                      <input type="text" className="form-control" id="pincode" onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="mobile">Mobile No.</label>
                      <input type="tel" className="form-control" id="mobile" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="theme-input-box">
                      <label htmlFor="addressName">Address Name</label>
                      <input type="text" className="form-control" id="addressName" onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                <div className="checkout-btn">
                  <button type="submit" className="theme-btn">Save Address</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
