'use client';

import { useState } from "react";
import styles from './CheckoutClientComponent.module.css'; // Import the CSS module
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useRouter } from "next/navigation";
import { payment } from "@/action/ServerActions";

export default function CheckoutClientComponent({ addresses, wallet, cartItems, userId }) {
    const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
    const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
    const [sameAddress, setSameAddress] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [errorMessage, setErrorMessage] = useState(""); // State to store error message
    const [isLoading, setIsLoading] = useState(false);
    const [transactionid, setransactionid] = useState("");

    const [useCashback, setUseCashback] = useState(false); // State to track cashback usage
    const [cashbackApplied, setCashbackApplied] = useState(false); // State to apply cashback to the total

    const router = useRouter();

    // Calculate total and items
    let total = cartItems.reduce((total, item) => total + (item.product.discountedPrice * item.quantity), 0);
    let items = cartItems.reduce((total, item) => total + (item.quantity), 0);

    let cgst = (total * 0.09);
    let sgst = (total * 0.09);

    let grandTotal = (total + cgst + sgst);

    // Apply cashback if user agrees
    if (cashbackApplied && wallet.cashbackAmount > 0) {
        grandTotal -= wallet.cashbackAmount;
    }

    // Handlers
    const handleApplyCashback = () => {
        setCashbackApplied(!cashbackApplied);
    };




    // Handle billing address selection
    const handleBillingAddressSelect = (addressId) => {
        setSelectedBillingAddress(addressId);
        if (sameAddress) {
            setSelectedShippingAddress(addressId);
        }
    };

    const handleShippingAddressSelect = (addressId) => {
        if (!sameAddress) {
            setSelectedShippingAddress(addressId);
        }
    };

    const handleSameAddressChange = () => {
        setSameAddress(!sameAddress);
        if (!sameAddress) {
            setSelectedShippingAddress(selectedBillingAddress);
        } else {
            setSelectedShippingAddress(null);
        }
    };

    // Function to handle PetNjoy card payment selection
    const handlePetNjoyPayment = () => {
        if (wallet.balance >= grandTotal) {
            setSelectedPaymentMethod('petnjoy');
            setErrorMessage(""); // Clear any previous error
        } else {
            setSelectedPaymentMethod(null);
            setErrorMessage("Insufficient balance in PetNjoy card");
        }
    };




    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        if (!selectedBillingAddress || !selectedShippingAddress) {
            alert("Please select both billing and shipping addresses.");
            return;
        }
    
        if (!selectedPaymentMethod) {
            alert("Please select a payment method.");
            return;
        }
    
        try {
            // Generate a transaction ID before any conditions
            let transactionId = '';
            if (selectedPaymentMethod === 'phonepe') {
                transactionId = "Cr-" + uuidv4().toString(36).slice(-6);
            } else if (selectedPaymentMethod === 'petnjoy' && cashbackApplied == true) {
                transactionId = "Wc-" + uuidv4().toString(36).slice(-6);
            } else if (selectedPaymentMethod === 'petnjoy' && cashbackApplied == false) {
                transactionId = "Wi-" + uuidv4().toString(36).slice(-6);
            } else if (selectedPaymentMethod === 'cod') {
                transactionId = "Cd-" + uuidv4().toString(36).slice(-6);
            }
    
            // Set transaction ID for state if needed elsewhere
            setransactionid(transactionId);
    
            setIsLoading(true);
    
            // Create order details with the transaction ID
            const orderDetails = {
                userId: userId,
                transactionId: transactionId,  // Use the generated transactionId here
                totalAmount: grandTotal,
                gstAmount: cgst,
                status: 'PENDING',
                billingAddressId: selectedBillingAddress,
                shippingAddressId: selectedShippingAddress,
                cartItems: cartItems.map(item => ({
                    productId: item.product.id,
                    quantity: item.quantity,
                    productPrice: item.product.discountedPrice,
                })),
            };
    
            const response = await fetch('/api/order/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderDetails),
            });
    
            if (response.ok) {
                const data = await response.json();
                if(transactionId.startsWith("Cr")) {
                    setIsLoading(false);
                    const redirect = await payment(grandTotal, transactionId);
                    console.log("redirect>>>", redirect.url);
                    router.push(redirect.url);
                } else {
                    



                    try {
                        
                
                        // Construct the API path dynamically using transactionId
                        // const apiUrl = `/api/status/${transactionId}`;
                
                        // Make the POST request
                        const response = await fetch(`/api/process/${transactionId}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ transactionId }),  // If you need to pass additional data
                        });
                
                        // Check if response is OK
                        if (response.ok) {
                            // Navigate to the success page with transactionId
                            router.push(`https://pet-shop-rust.vercel.app/success/${transactionId}`);
                        } else {
                            console.error("API call failed");
                            // Handle failure
                        }
                
                    } catch (error) {
                        console.error("Error in API call:", error);
                        // Handle error
                    } finally {
                        setIsLoading(false);
                    }




                }
            } else {
                console.log("ERROR");
            }
        } catch (error) {
            console.log("ERROR:", error);
        }
    };
    








    return (
        <section className="checout-area page-paddings">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        {/* Billing and Shipping Address Selection */}
                        <div className="checkout-title">
                            <h3 className="theme-title">Billing address</h3>
                        </div>
                        <div className="checkout-fom-box">
                            {/* Form and Address List */}
                            <form className="needs-validation" novalidate>
                                {/* Billing Address */}
                                <ul>
                                    {addresses.map((address) => (
                                        <li key={address.id} className={styles.addressListItem}>
                                            <input
                                                type="radio"
                                                id={`billing-${address.id}`}
                                                name="billingAddress"
                                                className={styles.radioInput}
                                                value={address.id}
                                                checked={selectedBillingAddress === address.id}
                                                onChange={() => handleBillingAddressSelect(address.id)}
                                            />
                                            <label htmlFor={`billing-${address.id}`} className={styles.addressLabel}>
                                                <p className={styles.addressLine}>{address.addressName}</p>
                                                <p className={styles.addressLine}>{address.firstName} {address.lastName}</p>
                                                <p className={styles.addressLine}>{address.address1}, {address.address2}</p>
                                                <p className={styles.addressLine}>{address.state}, {address.country}, {address.pincode}</p>
                                                <p className={styles.addressLine}>Mobile: {address.mobile}</p>
                                            </label>
                                        </li>
                                    ))}
                                </ul>

                                {/* Shipping Address Checkbox */}
                                <div className="checkout-checkbox">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="same-address"
                                            checked={sameAddress}
                                            onChange={handleSameAddressChange}
                                            disabled={!selectedBillingAddress}
                                        />
                                        <label className="custom-control-label" htmlFor="same-address">
                                            Shipping address is the same as my billing address
                                        </label>
                                    </div>
                                </div>

                                {/* Shipping Address */}
                                <h3 className="theme-title theme-title-box">Shipping address</h3>
                                <ul>
                                    {addresses.map((address) => (
                                        <li key={address.id} className={styles.addressListItem}>
                                            <input
                                                type="radio"
                                                id={`shipping-${address.id}`}
                                                name="shippingAddress"
                                                className={styles.radioInput}
                                                value={address.id}
                                                checked={selectedShippingAddress === address.id}
                                                onChange={() => handleShippingAddressSelect(address.id)}
                                                disabled={sameAddress} // Disable shipping selection if "same address" is checked
                                            />
                                            <label htmlFor={`shipping-${address.id}`} className={styles.addressLabel}>
                                                <p className={styles.addressLine}>{address.addressName}</p>
                                                <p className={styles.addressLine}>{address.firstName} {address.lastName}</p>
                                                <p className={styles.addressLine}>{address.address1}, {address.address2}</p>
                                                <p className={styles.addressLine}>{address.state}, {address.country}, {address.pincode}</p>
                                                <p className={styles.addressLine}>Mobile: {address.mobile}</p>
                                            </label>
                                        </li>
                                    ))}
                                </ul>

                                {/* Item Summary */}
                                <h3 className="theme-title theme-title-box">Item Summary</h3>
                                <div className={styles.itemSummaryContainer}>
                                    {cartItems.map((item) => (
                                        <div key={item.id} className={styles.itemSummary}>
                                            <div className={styles.itemImage}>
                                                <img src={item.product.imageUrl} alt={item.product.productName} />
                                            </div>
                                            <div className={styles.itemDetails}>
                                                <h4>{item.product.productName}</h4>
                                                <p>Price: ${item.product.discountedPrice.toFixed(2)}</p>
                                                <p>Quantity: {item.quantity}</p>
                                                <p>Total: ${(item.product.discountedPrice * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Payment Options */}
                                <h3 className="theme-title theme-title-box">Payment</h3>
                                <div className={styles.paymentOptionsContainer}>
                                    {/* PetNjoy Payment Option */}
                                    <div
                                        className={`${styles.paymentCard} ${selectedPaymentMethod === 'petnjoy' ? styles.selected : ''}`}
                                        onClick={handlePetNjoyPayment}
                                    >
                                        <h3>Pay with PetNjoy Card</h3>
                                        <p className={styles.tagline}>Use your PetNjoy balance to complete the payment and earn cashback.</p>
                                        <p className={styles.walletBalance}>Card Balance: ${wallet.balance.toFixed(2)}</p>
                                        <p className={styles.walletBalance}>Cashback Balance: ${wallet.cashbackAmount.toFixed(2)}</p>
                                        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} {/* Display error message */}
                                    </div>

                                    {/* Other Payment Options */}
                                    <div
                                        className={`${styles.paymentCard} ${selectedPaymentMethod === 'phonepe' ? styles.selected : ''}`}
                                        onClick={() => setSelectedPaymentMethod('phonepe')}
                                    >
                                        <h3>Pay with PhonePe Gateway</h3>
                                        <p className={styles.tagline}>Secure payment through PhonePe.</p>
                                    </div>
                                    <div
                                        className={`${styles.paymentCard} ${selectedPaymentMethod === 'cod' ? styles.selected : ''}`}
                                        onClick={() => setSelectedPaymentMethod('cod')}
                                    >
                                        <h3>Cash on Delivery</h3>
                                        <p className={styles.tagline}>Pay with cash when your order is delivered.</p>
                                    </div>
                                </div>

                                {/* Place Order Button */}
                                <div className="checkout-btn">
                                    <button className="theme-btn" onClick={handlePlaceOrder}>Place Order</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Subtotal and Promo Code */}
                        {/* Subtotal and Cashback Option */}
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="shopping-cart-box widget-box">
                                <div className="widget">
                                    <div className="widget-category">
                                        <div className="blog-news-title">
                                            <h2>Subtotal</h2>
                                        </div>
                                        <div className="subtotal-content">
                                            <div className="subtotal-content-box">
                                                <ul>
                                                    <li>{items} items <span>${total.toFixed(2)}</span></li>
                                                    <li>Shipping <span>Free</span></li>
                                                    <li>CGST 9% <span>${cgst.toFixed(2)}</span></li>
                                                    <li>SGST 9% <span>${sgst.toFixed(2)}</span></li>

                                                    {/* Only show cashback option if cashback balance > 0 */}
                                                    {wallet.cashbackAmount > 0 && (
                                                        <li>
                                                            <div>
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={cashbackApplied}
                                                                        onChange={handleApplyCashback}
                                                                    />
                                                                    <span>Use Cashback Balance (${wallet.cashbackAmount.toFixed(2)})</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    )}

                                                    {/* Show discounted total if cashback is applied */}
                                                    {cashbackApplied && wallet.cashbackAmount > 0 && (
                                                        <li>Cashback Applied <span>- ${wallet.cashbackAmount.toFixed(2)}</span></li>
                                                    )}
                                                </ul>
                                                <ul>
                                                    <li>Total (tax incl.) <span>${grandTotal.toFixed(2)}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Promo Code Box */}
                                <div className="coupon-code-box">
                                    <form className="coupon-card">
                                        <div className="theme-input-box">
                                            <input type="text" className="form-control" placeholder="Promo code" />
                                            <button type="button" className="theme-btn style-four">Apply Coupon</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isLoading && (
                    <div className={styles.loadingOverlay}>
                    <LoadingSpinner />
                    </div>
                )}
        </section>
    );
}
