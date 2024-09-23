"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/create-address/ClientComponent.module.css';

export default function ProductForm() {

    const router = useRouter();
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');

    const inputFileRef = useRef(null);
    const [blob, setBlob] = useState(null);

    // Image upload function
    const handleUpload = async (e) => {
        e.preventDefault();
        const file = inputFileRef.current.files[0];

        const response = await fetch(
            `/api/file?filename=${file.name}`,
            {
                method: 'POST',
                body: file,
            },
        );

        const newBlob = (await response.json());

        setBlob(newBlob);
        setImageUrl(newBlob.url);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('/api/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productName,
                    productType,
                    brand,
                    category,
                    originalPrice,
                    discountedPrice,
                    stock,
                    imageUrl
                })
            });
            router.refresh();
            setMessage('Product added successfully');
        } catch (error) {
            setMessage('An error occurred while adding the product: ' + error.message);
        }

        // Reset form
        setProductType('');
        setProductName('');
        setOriginalPrice('');
        setDiscountedPrice('');
        setBrand('');
        setCategory('');
        setStock('');
        setImageUrl('');
        setBlob(null);
    };

    return (
        <section className="checout-area page-paddings">
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="checkout-title">
                            <h3 className="theme-title">Add Product</h3>
                        </div>
                        <div className="checkout-fom-box">
                            <form className="needs-validation" novalidate onSubmit={handleSubmit}>
                                {/* Form Fields */}
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="theme-input-box">
                                            <label htmlFor="productName">Product Name</label>
                                            <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="theme-input-box">
                                            <label htmlFor="productType">Product Type</label>
                                            <input type="text" className="form-control" id="productType" value={productType} onChange={(e) => setProductType(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-4 col-12">
                                            <div className="theme-input-box">
                                                <label htmlFor="originalPrice">Original Price</label>
                                                <input type="number" className="form-control" id="originalPrice" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-4 col-12">
                                            <div className="theme-input-box">
                                                <label htmlFor="discountedPrice">Discounted Price</label>
                                                <input type="number" className="form-control" id="discountedPrice" value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-4 col-12">
                                            <div className="theme-input-box">
                                                <label htmlFor="brand">Brand</label>
                                                <input type="text" className="form-control" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                            <div className="theme-input-box">
                                                <label htmlFor="category">Category</label>
                                                <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                            <div className="theme-input-box">
                                                <label htmlFor="stock">Stock</label>
                                                <input type="number" className="form-control" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image Upload Section */}
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="theme-input-box">
                                                <label>Upload Image of Product</label>
                                                <input 
                                                    name="file"
                                                    ref={inputFileRef}
                                                    type="file" required 
                                                />
                                                <button onClick={handleUpload}>Upload</button>
                                                {blob && (
                                                    <div>
                                                        Blob url: <a href={blob.url}>{blob.url}</a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="checkout-btn">
                                    <button type="submit" className="theme-btn">Save Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
