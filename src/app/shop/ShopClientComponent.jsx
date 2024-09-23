'use client';

import Link from "next/link";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useRouter } from "next/navigation";
import styles from "./ShopClientComponent.module.css";
import { useEffect, useState } from "react";
import useDebounce from './useDebounce';

export default function ShopClientComponent({ initialProducts, brands, categories, wishlistProductIds, userId }) {
   
   const [selectedBrands, setSelectedBrands] = useState([]);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [products, setProducts] = useState(initialProducts);
   const [selectedRanges, setSelectedRanges] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalProducts, setTotalProducts] = useState(0);
   const productsPerPage = 10;
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedSort, setSelectedSort] = useState('manual');
   const [searchNavTerm, setSearchNavTerm] = useState("");

   const debouncedSearchTerm = useDebounce(searchTerm, 1000);
   const debouncedCategories = useDebounce(selectedCategories, 1);

   const router = useRouter();   
   

   useEffect(() => {
      // Retrieve the selected category from sessionStorage
      const storedCategory = sessionStorage.getItem('selectedCategory');
      if (storedCategory) {
        setSelectedCategories([storedCategory]); // Set the retrieved category
        sessionStorage.removeItem('selectedCategory'); // Clear after use
      }
    }, [selectedCategories]);


    

    const handleCategoryCheckboxChange = (e) => {
      const category = e.target.value;
      if (e.target.checked) {
        setSelectedCategories((prevCategories) => [...prevCategories, category]);
      } else {
        setSelectedCategories((prevCategories) =>
          prevCategories.filter((cat) => cat !== category)
        );
      }
    };

    const handleBrandCheckboxChange = (event) => {
      setIsLoading(true);
      const brand = event.target.value;
      setSelectedBrands((prevBrands) => {
        if (prevBrands.includes(brand)) {
          return prevBrands.filter((b) => b !== brand);
        } else {
          return [...prevBrands, brand];
        }
      });
    };

    


   const handlePriceCheckboxChange = (min, max) => {
      setIsLoading(true);
      const range = { min, max };
      const isAlreadySelected = selectedRanges.some(
        (r) => r.min === min && r.max === max
      );
    
      if (isAlreadySelected) {
        // Remove the range if it's already selected
        setSelectedRanges(selectedRanges.filter((r) => r.min !== min || r.max !== max));
      } else {
        // Add the new range to the selectedRanges array
        setSelectedRanges([...selectedRanges, range]);
      }
    };
    







    const fetchFilteredProducts = async () => {
      setIsLoading(true);
      const queryParams = new URLSearchParams();
    
      if (selectedBrands.length) queryParams.append('brands', selectedBrands.join(','));
      if (selectedCategories.length) queryParams.append('categories', selectedCategories.join(','));
      if (selectedRanges.length) {
        const priceRanges = selectedRanges
          .map(range => `${range.min}-${range.max}`)
          .join(',');
        queryParams.append('priceRanges', priceRanges);
      }
      
      queryParams.append('page', currentPage);
      queryParams.append('limit', productsPerPage);
    
      try {
        const res = await fetch(`/api/products?${queryParams.toString()}`);
        const data = await res.json();
    
        setProducts(data.products);
        setTotalProducts(data.totalProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    


    useEffect(() => {
      const storedSearchTerm = sessionStorage.getItem('searchTerm');
      if (storedSearchTerm) {
        setSearchTerm(storedSearchTerm);
        setSearchNavTerm(storedSearchTerm); // Set searchNavTerm after setting searchTerm
        sessionStorage.removeItem('searchTerm'); // Clear the search term after using it
      }
    }, [searchTerm]);

    useEffect(() => {
      const fetchSearchResults = async () => {
        if (debouncedSearchTerm) {
          setIsLoading(true);
          const queryParams = new URLSearchParams();
  
          if (debouncedSearchTerm) queryParams.append('search', debouncedSearchTerm);
          queryParams.append('page', currentPage);
          queryParams.append('limit', productsPerPage);
  
          try {
            const res = await fetch(`/api/products?${queryParams.toString()}`);
            const data = await res.json();
  
            setProducts(data.products);
            setTotalProducts(data.totalProducts);
          } catch (error) {
            console.error('Error fetching search results:', error);
          } finally {
            setIsLoading(false);
          }
        }
        if (debouncedCategories != null) {
         setIsLoading(true);
         const queryParams = new URLSearchParams();
       
         if (selectedBrands.length) queryParams.append('brands', selectedBrands.join(','));
         if (debouncedCategories.length) queryParams.append('categories', debouncedCategories.join(','));
         if (selectedRanges.length) {
           const priceRanges = selectedRanges
             .map(range => `${range.min}-${range.max}`)
             .join(',');
           queryParams.append('priceRanges', priceRanges);
         }
         
         queryParams.append('page', currentPage);
         queryParams.append('limit', productsPerPage);
       
         try {
           const res = await fetch(`/api/products?${queryParams.toString()}`);
           const data = await res.json();
       
           setProducts(data.products);
           setTotalProducts(data.totalProducts);
         } catch (error) {
           console.error('Error fetching products:', error);
         } finally {
           setIsLoading(false);
         }
        }
      };
  
      fetchSearchResults();
    }, [debouncedSearchTerm, debouncedCategories, currentPage, productsPerPage]);




    // This function is only for handling search
    const handleSearch = async (e) => {
      // Optional: Check if an event was passed (e.g., a form submit)
      if (e) e.preventDefault(); // Only call preventDefault if it's triggered by a form/event
    
      setIsLoading(true);
      const queryParams = new URLSearchParams();
    
      // Adding only the searchTerm in the search functionality
      if (searchTerm) queryParams.append('search', searchTerm);
    
      queryParams.append('page', currentPage); // Optional if you want to paginate the search results
      queryParams.append('limit', productsPerPage);
    
      try {
        const res = await fetch(`/api/products?${queryParams.toString()}`);
        const data = await res.json();
    
        setProducts(data.products);
        setTotalProducts(data.totalProducts);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setIsLoading(false);
      }
    };
    

    const handleSortChange = async (e) => {
      setSelectedSort(e.target.value);
      setIsLoading(true);
      const queryParams = new URLSearchParams();
  
      if (selectedBrands.length) queryParams.append('brands', selectedBrands.join(','));
      if (selectedCategories.length) queryParams.append('categories', selectedCategories.join(','));
      if (selectedRanges.length) {
        const priceRanges = selectedRanges
          .map(range => `${range.min}-${range.max}`)
          .join(',');
        queryParams.append('priceRanges', priceRanges);
      }
  
      queryParams.append('page', currentPage);
      queryParams.append('limit', productsPerPage);
      queryParams.append('sort', e.target.value); // Include sort parameter
  
      try {
        const res = await fetch(`/api/products?${queryParams.toString()}`);
        const data = await res.json();
  
        setProducts(data.products);
        setTotalProducts(data.totalProducts);
      } catch (error) {
        console.error('Error fetching sorted products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    useEffect(() => {
      fetchFilteredProducts();
    }, [selectedBrands, selectedCategories, selectedRanges, currentPage]);
    




   
   const [isLoading, setIsLoading] = useState(false);

   const [wishlist, setWishlist] = useState(wishlistProductIds);

   const handleWishlistClick = async (productId) => {
      const isInWishlist = wishlist.includes(productId);

      try {
         setIsLoading(true);
         const res = await fetch('/api/wishlistToggle', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId, userId }),
         });

         const data = await res.json();

         if (res.ok) {
            // Update the local wishlist state
            setWishlist((prev) =>
               isInWishlist
                  ? prev.filter((id) => id !== productId) // Remove from wishlist
                  : [...prev, productId] // Add to wishlist
            );
         } else {
            console.error('Error:', data.message);
         }
      } catch (error) {
         console.error('Error updating wishlist:', error);
      }
      finally {
         setIsLoading(false);
      }
   };

   const totalPages = Math.ceil(totalProducts / productsPerPage);

   const handlePageChange = (page) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

   return (
      <section class="shop-page-area page-paddings">
         <div class="container">
            <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                  <div class="shop-sidebar">
                     <div class="sidebar-widget sidebar-search">
                        <h3 class="widget-title">Search</h3>
                        <div class="sidebar-widget-box">
                           <form>
                           <div className="theme-input-box">
                              <input
                                    className="form-control"
                                    type="text"
                                    name="search-store"
                                    placeholder="Search our store"
                                    value={searchTerm}  // Bind search term to input
                                    onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input change
                                 />
                                 <button className="widget-search-btn" onClick={handleSearch}>
                                    <i className="fas fa-search"></i>
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="sidebar-widget category-sub-menu">
                     <h3 className="widget-title">Categories</h3>
                     <div className="sidebar-widget-box">
                        <ul className="sidebar-category" style={{ listStyleType: 'none', paddingLeft: 20 }}>
                           <li>
                           <label>
                              <input
                                 type="checkbox"
                                 value="Dog Food"
                                 className="category-checkbox"
                                 onChange={handleCategoryCheckboxChange}
                                 checked={selectedCategories.includes('Dog Food')}
                                 style={{ marginRight: '12px' }}
                              />{' '}
                              Dog Food 
                           </label>
                           </li>
                           <li>
                           <label>
                              <input
                                 type="checkbox"
                                 value="Cat Food"
                                 className="category-checkbox"
                                 onChange={handleCategoryCheckboxChange}
                                 checked={selectedCategories.includes('Cat Food')}
                                 style={{ marginRight: '12px' }}
                              />{' '}
                              Cat Food 
                           </label>
                           </li>
                           <li>
                           <label>
                              <input
                                 type="checkbox"
                                 value="Fish Food"
                                 className="category-checkbox"
                                 onChange={handleCategoryCheckboxChange}
                                 checked={selectedCategories.includes('Fish Food')}
                                 style={{ marginRight: '12px' }}
                              />{' '}
                              Fish Food 
                           </label>
                           </li>
                           <li>
                           <label>
                              <input
                                 type="checkbox"
                                 value="Bird Food"
                                 className="category-checkbox"
                                 onChange={handleCategoryCheckboxChange}
                                 checked={selectedCategories.includes('Bird Food')}
                                 style={{ marginRight: '12px' }}
                              />{' '}
                              Bird Food 
                           </label>
                           </li>
                           <li>
                           <label>
                              <input
                                 type="checkbox"
                                 value="Reptile Food"
                                 className="category-checkbox"
                                 onChange={handleCategoryCheckboxChange}
                                 checked={selectedCategories.includes('Reptile Food')}
                                 style={{ marginRight: '12px' }}
                              />{' '}
                              Reptile Food 
                           </label>
                           </li>
                           <li>
                           <label>
                              <input
                                 type="checkbox"
                                 value="Small Pet Food"
                                 className="category-checkbox"
                                 onChange={handleCategoryCheckboxChange}
                                 checked={selectedCategories.includes('Small Pet Food')}
                                 style={{ marginRight: '12px' }}
                              />{' '}
                              Small Pet Food 
                           </label>
                           </li>
                        </ul>
                     </div>
                     </div>
                     <div class="sidebar-widget product-sidebar-size">
                        <h3 class="widget-title">Shop By Price</h3>
                        <div className="sidebar-widget-box">
                        <ul className="sidebar-category" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li>
                           <label>
                              <input 
                              type="checkbox" 
                              onChange={() => handlePriceCheckboxChange(0, 100)}
                              checked={selectedRanges.some((r) => r.min === 0 && r.max === 100)}
                              style={{ marginRight: '12px' }}
                              />
                               ₹0 - ₹100
                           </label>
                        </li>
                        <li>
                           <label>
                              <input 
                              type="checkbox" 
                              onChange={() => handlePriceCheckboxChange(100, 250)}
                              checked={selectedRanges.some((r) => r.min === 100 && r.max === 250)}
                              style={{ marginRight: '12px' }}
                              />
                              ₹100 - ₹250
                           </label>
                        </li>
                        <li>
                           <label>
                              <input 
                              type="checkbox" 
                              onChange={() => handlePriceCheckboxChange(250, 400)}
                              checked={selectedRanges.some((r) => r.min === 250 && r.max === 400)}
                              style={{ marginRight: '12px' }}
                              />
                              ₹250 - ₹400
                           </label>
                        </li>
                        <li>
                           <label>
                              <input 
                              type="checkbox" 
                              onChange={() => handlePriceCheckboxChange(400, 700)}
                              checked={selectedRanges.some((r) => r.min === 400 && r.max === 700)}
                              style={{ marginRight: '12px' }}
                              />
                              ₹400 - ₹700
                           </label>
                        </li>
                        <li>
                           <label>
                              <input 
                              type="checkbox" 
                              onChange={() => handlePriceCheckboxChange(700, 1000)}
                              checked={selectedRanges.some((r) => r.min === 700 && r.max === 1000)}
                              style={{ marginRight: '12px' }}
                              />
                              ₹700 - ₹1000
                           </label>
                        </li>
                        <li>
                           <label>
                              <input 
                              type="checkbox" 
                              onChange={() => handlePriceCheckboxChange(1000, 100000)}
                              checked={selectedRanges.some((r) => r.min === 1000 && r.max === 100000)}
                              style={{ marginRight: '12px' }}
                              />
                              More than ₹1000
                           </label>
                        </li>
                        </ul>
                     </div>
                     </div>





                     <div className="sidebar-widget category-sub-menu">
                     <h3 className="widget-title">Shop By Brand</h3>
                     <div className="sidebar-widget-box">
                        <ul className="sidebar-category" style={{ listStyleType: 'none', paddingLeft: 20 }}>
                           {brands.map((brand) => (
                           <li key={brand}>  
                           <label>
                              <input
                                 type="checkbox"
                                 value={brand}
                                 className="category-checkbox"
                                 onChange={handleBrandCheckboxChange}
                                 style={{ marginRight: '12px' }}
                              />{' '}
                              {brand}
                           </label>
                           </li>
                           ))}
                        </ul>
                     </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                  <div class="collection-shorting clearfix">
                     <div class="short-tab">
                        <ul class="nav nav-tabs" role="tablist">
                           <li class="nav-item">
                              <a class="nav-link active" data-toggle="tab" href="#sort-1" role="tab"><i class="fas fa-th"></i></a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#sort-2" role="tab"><i class="fas fa-list"></i></a>
                           </li>
                        </ul>
                     </div>
                     <div className="short-list">
                        <div className="product-filter clearfix">
                           <ul className="clearfix">
                              <li>
                              <label>Sort by:</label>
                              <select className="product-filter-dropdown" onChange={handleSortChange} value={selectedSort}>
                                 <option value="manual">Featured</option>
                                 <option value="best-selling">Best Selling</option>
                                 <option value="title-ascending">Alphabetically, A-Z</option>
                                 <option value="title-descending">Alphabetically, Z-A</option>
                                 <option value="price-ascending">Price, low to high</option>
                                 <option value="price-descending">Price, high to low</option>
                              </select>
                              </li>
                           </ul>
                        </div>
                        </div>
                  </div>
                  <div class="shop-grid-box">
                     <div class="tab-content">
                        <div class="tab-pane active" id="sort-1" role="tabpanel">
                           <div class="shop-product-box">
                              <div class="row">
                                 {products.map((product) => {
                                    const isInWishlist = wishlist.includes(product.id);
                                    return (
                                       <div key={product.id} className={`col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ${styles.productCard}`}>
                                          {/* Wrap the Link component only around the parts that need to be clickable for product details */}
                                          <div className={styles.productBox}>
                                             <div className={styles.productImages}>
                                                <Link href={`/product/${product.id}`} passHref>
                                                   <img height={241} src={product.imageUrl} alt={product.productName} />
                                                </Link>

                                                {/* Wishlist Icon */}
                                                <div
                                                   className="pro-whislist-ico"
                                                   onClick={(e) => {
                                                      e.preventDefault();  // Prevent the default action of the link
                                                      handleWishlistClick(product.id); // Handle the wishlist toggle
                                                   }}
                                                   style={{ cursor: 'pointer' }}
                                                >
                                                   <i className={isInWishlist ? 'fas fa-heart' : 'far fa-heart'}></i>
                                                </div>
                                             </div>

                                             <div className={styles.productContent}>
                                                <span>{product.productType}</span>
                                                <h3 className={styles.themeTitle}>{product.productName}</h3>
                                                <div className={styles.productPrice}>
                                                   <span className={styles.price}>
                                                      <del>₹{product.originalPrice}</del> <ins>₹{product.discountedPrice}</ins>
                                                   </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    )
                                 })}
                                 <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="theme-pagination clearfix">
                                       <ul className="pagination">
                                          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                          <a
                                             className="page-link"
                                             href="#"
                                             onClick={() => handlePageChange(currentPage - 1)}
                                          >
                                             Previous
                                          </a>
                                          </li>
                                          {[...Array(totalPages)].map((_, index) => (
                                          <li
                                             key={index + 1}
                                             className={"page-item"}
                                          >
                                             <a
                                                className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                                                href="#"
                                                onClick={() => handlePageChange(index + 1)}
                                             >
                                                {index + 1}
                                             </a>
                                          </li>
                                          ))}
                                          <li
                                          className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                                          >
                                          <a
                                             className="page-link"
                                             href="#"
                                             onClick={() => handlePageChange(currentPage + 1)}
                                          >
                                             Next
                                          </a>
                                          </li>
                                       </ul>
                                    </div>
                                    </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Show loading spinner */}
         {isLoading && (
            <div className={styles.loadingOverlay}>
               <LoadingSpinner />
            </div>
         )}
      </section>
   );
}