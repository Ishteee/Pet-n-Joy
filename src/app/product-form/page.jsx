"use client";

import { useState, useRef } from "react";
import Router, { useRouter } from "next/navigation";

export default function ProductForm() {

  const router = useRouter();
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await fetch('/api/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName, productType, originalPrice, discountedPrice, imageUrl})
      })
      router.refresh();
    } catch (error) {
      setMessage('An error occurred while adding the product: ' + error.message);
    }

    setMessage('Product added successfully');
    setProductType('');
    setProductName('');
    setOriginalPrice('');
    setDiscountedPrice('');
    setImageUrl('');
    setBlob(null);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Product Type</label>
        <input
          type="text"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Original Price</label>
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Discounted Price</label>
        <input
          type="number"
          value={discountedPrice}
          onChange={(e) => setDiscountedPrice(e.target.value)}
          required
        />
      </div>
      <div>
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
      <button type="submit">Add Product</button>
      {message && <p>{message}</p>}
    </form>
  );
}
