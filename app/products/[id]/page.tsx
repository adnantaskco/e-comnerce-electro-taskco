"use client";
import ProductClientView from "@/components/ProductClient";

import { DataALLProducts } from "@/lib/data/AllProducts";
import { notFound } from "next/navigation"; 
import React, { useState } from "react";
import { useCart } from "../../context/CartContext"; 
import { CiStar } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi"; // Added intuitive icons for +/-
import { FaCartArrowDown, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa6";

interface PageProps {
  params: Promise<{ id: string }>; 
}

export default function ViewProductPage({ params }: PageProps) {
  const { id } = React.use(params); 
  const { addToCart } = useCart();
   const [hovered, setHovered] = useState<number | null>(null);
  
  // State for Quantity Management
  const [quantity, setQuantity] = useState(1);
  
  // State for active info tab
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "reviews">("description");

  const product = DataALLProducts.find((p) => String(p.id) === String(id));

if (!product) {
  notFound();
}

  const identicalBrandProducts = DataALLProducts.filter(
  (p) => p.brand === product.brand && String(p.id) !== String(id)
);



const suggestedProducts = [...identicalBrandProducts].slice(0, 4); 

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };


  const [rating, setRating] = useState(0);
const [hoverRating, setHoverRating] = useState(0);
const [comment, setComment] = useState("");

const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // Console log the submission data
  console.log("Review Submitted:", {
    productId: product.id,
    rating: rating,
    comment: comment,
    timestamp: new Date().toISOString()
  });

  // Optional: Reset form fields after submission
  setRating(0);
  setComment("");
};

  return (
    <div className="container mx-auto px-4 md:px-16 py-10">
      <nav className="flex items-center space-x-2 text-xs md:text-sm text-ring mb-8 border-b borderring/20 pb-4">
          <a href="/home" className="hover:text-text-primary transition">Home</a>
          <span>/</span>
          <Link href="/products" className="hover:text-text-primary transition">Products</Link>
          <span>/</span>
          <span className="text-ring font-medium">{product.name}</span>
        </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        
        {/* IMAGE SECTION */}
        <div className="bg-background rounded-2xl p-6  shadow-sm">
          <div className="relative w-full h-[350px] sm:h-[500px] flex items-center justify-center bg-background rounded-2xl overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain hover:scale-125 transition-transform duration-300"
            />
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="space-y-5">
          <p className="text-sm text-ring">{product.brand || "Null"}</p>
          <h1 className="text-2xl sm:text-3xl text-text-primary font-bold">{product.name}</h1>

          {/* Rating + Sold */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-cart-5 font-semibold flex items-center gap-1">
              <CiStar className="text-lg text-text-star" /> {product.review || 4.5}
            </span>
            <span className="text-ring">
              {product.sold_amount || 12} Sold
            </span>
          </div>
          <div>
            <h1 className="text-text-primary font-semibold ">Description:</h1>
            <p className="text-sm text-text-primary leading-relaxed mb-4">
            Experience premium quality and exceptional performance with the{" "}
            <strong className="font-semibold text-primary">
              {product?.name || "this product"}
            </strong>
            . Engineered to deliver reliable efficiency and modern functionality, it is designed to seamlessly fit into your daily routine. Crafted with high-grade durability and user convenience in mind, it offers the perfect balance of value and excellence.
          </p>
          </div>
          {/* Price Box */}
          <div className="bg-bacground p-4 rounded-xl border">
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-bold text-destructive">
                ৳{product.sale_price.toLocaleString()}
              </h2>
              {product.has_discount && (
                <span className="line-through text-ring">
                  ৳{product.retail_price.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-xs text-ring mt-2">Inclusive of all taxes</p>
          </div>

          {/* QUANTITY SELECTOR */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-primary">Quantity</label>
            <div className="flex items-center border border-sidebar-ring rounded-xl w-32 justify-between bg-background overflow-hidden">
              <button 
                onClick={handleDecrease}
                className="p-3 hover:bg-ring/10 transition active:scale-95 text-ring"
                aria-label="Decrease quantity"
              >
                <FiMinus />
              </button>
              <span className="font-semibold text-text-primary w-8 text-center">{quantity}</span>
              <button 
                onClick={handleIncrease}
                className="p-3 hover:bg-ring/10 transition active:scale-95 text-ring"
                aria-label="Increase quantity"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="flex-1 bg-primary hover:bg-primary/50 active::scale-95 text-text-secondary py-3 rounded-xl font-semibold transition">
              Wishlist
            </button>
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: Number(product.sale_price),
                  image: product.images[0],
                  // note: Pass `quantity` here if your Cart Context supports quantity scaling on insertion
                })
              }
              className="flex-1 border border-sidebar-ring bg-background hover:bg-ring/20 active:scale-[0.98] text-text-primary py-3 rounded-xl font-semibold transition"
            >
              Add to Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className="text-md text-text-primary space-y-2 pt-4 border-t">
            <p>✔ 100% Genuine Product</p>
            <p>✔ Fast Delivery Available</p>
            <p>✔ Cash on Delivery</p>
          </div>
        </div>
      </div>

      {/* TABBED INTERFACE SECTION */}
      <div className="mt-12 bg-background border rounded-2xl overflow-hidden shadow-sm">
        {/* Tab Headers */}
        <div className="flex border-b bg-ring/5 overflow-x-auto no-scrollbar whitespace-nowrap">
          {(["description", "specifications", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-semibold text-sm capitalize transition-colors border-b-2 -mb-[2px] ${
                activeTab === tab
                  ? "border-primary text-primary bg-bacground"
                  : "border-transparent text-ring hover:text-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6">
          {activeTab === "description" && (
            <div>
              <h3 className="font-bold text-text-primary text-lg mb-3">Product Details</h3>
              <p className="text-muted-foreground text-text-primary leading-7">
                  Experience the perfect combination of performance, style, and reliability with the{" "}
                  <span className="font-semibold">{product.name}</span> from{" "}
                  <span className="font-semibold">{product.brand}</span>. Carefully designed to deliver
                  exceptional quality and everyday convenience, this product is built using premium
                  materials to ensure durability, comfort, and long-lasting performance.

                  Whether you're using it for work, entertainment, gaming, travel, or daily tasks,
                  the {product.name} provides a seamless experience with modern features and dependable
                  functionality. Its sleek design, user-friendly operation, and attention to detail
                  make it a valuable addition to your collection.

                  Manufactured by {product.brand}, a trusted name known for innovation and quality,
                  this product undergoes strict quality standards to ensure customer satisfaction.
                  The combination of advanced technology, premium craftsmanship, and practical
                  usability makes the {product.name} an excellent choice for users seeking both
                  performance and value.

                  Key highlights include superior build quality, enhanced efficiency, comfortable
                  usability, reliable operation, and a modern aesthetic that complements any setup.
                  Whether you are upgrading your current equipment or purchasing for the first time,
                  the {product.name} is designed to meet your expectations and provide a premium
                  experience for years to come.

                  Choose the {product.name} by {product.brand} and enjoy a product that balances quality,
                  functionality, and style in one complete package.
                </p>
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="max-w-xl">
              <h3 className="font-bold text-text-primary text-lg mb-3">Technical Specifications</h3>
              <table className="w-full text-sm text-left border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Brand</td>
                    <td className="py-2 text-text-primary">{product.brand || "Unknown"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Name</td>
                    <td className="py-2 text-text-primary">{product.name || "Nill"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Sold Amount</td>
                    <td className="py-2 text-text-primary">{product.sold_amount || "25"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3"> Discount Price</td>
                    <td className="py-2 text-text-primary">{product.discount_price || "Nill"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Price</td>
                    <td className="py-2 text-text-primary">{product.sale_price || "Nill"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring">Availability</td>
                    <td className="py-2 text-text-primary">In Stock</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Review</td>
                    <td className="py-2 text-text-primary">{product.review || "4.5"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring">Warranty</td>
                    <td className="py-2 text-text-primary">1 Year Official Warranty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "reviews" && (
      <div>
        <h3 className="font-bold text-text-primary text-lg mb-3">Customer Reviews</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl text-text-primary font-bold">{product.review || "4.5"}</span>
          <span className="text-ring text-sm">out of 5 stars ({product.sold_amount || 120} responses)</span>
        </div>
        <p className="text-sm text-ring italic mb-6">No direct written user reviews yet. Be the first to write one!</p>

        <hr className="border-background/20 mb-6" />

        {/* Leave a Review Form */}
        <form onSubmit={handleSubmitReview} className="space-y-4 bg-ring/1 p-4 rounded-lg">
          <h4 className="font-semibold text-text-primary text-md">Write a Review</h4>
          
      {/* Star Rating Selection */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">Your Rating</label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`text-2xl transition-colors ${
                star <= (hoverRating || rating) ? "text-yellow-500" : "text-ring/50"
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Comment Box */}
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-text-primary mb-1">
          Your Review
        </label>
        <textarea
          id="comment"
          rows={4}
          className="w-full p-2 border border-ring/20 rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-sm text-text-primary"
          placeholder="Share your thoughts about this product..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={rating === 0}
        className={`px-4 py-2 rounded-md text-sm font-medium text-text-secondary transition-colors ${
          rating === 0 
            ? "bg-ring cursor-not-allowed" 
            : "bg-primary hover:bg-primary/50"
        }`}
      >
        Submit Review
      </button>
    </form>
  </div>
)}
        </div>
      </div>

      {/* SUGGESTED PRODUCTS SECTION */}
      <div className="mt-16">
        <h2 className="font-bold text-2xl mb-6 text-text-primary">
          You May Also Like
        </h2>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {suggestedProducts.map((item) => {
            // Calculate discount percentage dynamically if applicable
            const discountPercentage = item.has_discount 
              ? Math.round(((item.retail_price - item.sale_price) / item.retail_price) * 100) 
              : 0;

            const isCurrentHovered = hovered === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={() => setHovered(item.id)}
                className="bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 group flex flex-col h-full select-none"
              >
                {/* IMAGE BOX */}
                <div className="relative bg-muted/30 aspect-square w-full flex items-center justify-center p-4 overflow-hidden select-none">
                  {/* Primary Image */}
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className={`object-contain w-full h-full max-h-[160px] sm:max-h-[240px] transition-all duration-700 ease-out transform group-hover:scale-105 ${
                      isCurrentHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {/* Hover Image */}
                  {item.images[1] && (
                    <img
                      src={item.images[1]}
                      alt={`${item.name} alternative`}
                      className={`absolute inset-0 m-auto object-contain w-full h-full max-h-[160px] sm:max-h-[240px] transition-all duration-700 ease-out transform ${
                        isCurrentHovered ? "opacity-100 scale-105" : "opacity-0 scale-95"
                      }`}
                    />
                  )}

                  {/* DISCOUNT BADGE */}
                  {item.has_discount && discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-ring/10 text-destructive-foreground text-[10px] sm:text-xs font-bold px-2 py-1 rounded-lg shadow-sm z-10 backdrop-blur-sm bg-opacity-90">
                      -{discountPercentage}%
                    </div>
                  )}

                  {/* ACTION BUTTONS */}
                  <div
                    className={`
                      absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 px-2.5 py-1.5 rounded-xl bg-background/90 backdrop-blur-md shadow-lg border border-border/40 transition-all duration-300 transform
                      ${isCurrentHovered ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
                      md:opacity-0 md:translate-y-4 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto
                    `}
                  >
                    <button 
                      onTouchStart={(e) => e.stopPropagation()} 
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 active:scale-95 transition-all" 
                      title="Add to Wishlist"
                    >
                      <FaHeart className="w-3.5 h-3.5 pointer-events-none" />
                    </button>

                    <div className="w-[1px] h-3 bg-border" />

                    <button 
                      onTouchStart={(e) => e.stopPropagation()} 
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 active:scale-95 transition-all" 
                      title="Quick View"
                    >
                      <FaEye className="w-3.5 h-3.5 pointer-events-none" />
                    </button>

                    <div className="w-[1px] h-3 bg-border" />

                    <button 
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                         price: Number(item.sale_price),
                        image: item.images[0],
                      })
                    }
                      onTouchStart={(e) => e.stopPropagation()} 
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 active:scale-95 transition-all" 
                      title="Add to Cart"
                    >
                      <FaShoppingCart className="w-3.5 h-3.5 pointer-events-none" />
                    </button>
                  </div>
                </div>

                {/* DETAILS/CONTENT BOX */}
                <Link href={`/products/${item.id}`} className="p-3 md:p-4 flex flex-col flex-grow group/link">
                  <p className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase font-medium">{item.brand}</p>
                  <h2 className="text-xs md:text-sm text-card-foreground font-semibold mt-0.5 group-hover/link:text-primary transition-colors line-clamp-2 min-h-[2rem]">
                    {item.name}
                  </h2>

                  {/* RATING */}
                  <div className="flex items-center gap-1 ">
                    <div className="flex text-amber-400 text-[10px] md:text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < Math.floor(item.review) ? "fill-current" : "text-muted/40"} 
                        />
                      ))}
                    </div>
                    <span className="text-[10px] md:text-xs text-muted-foreground font-medium">({item.review})</span>
                  </div>

                  {/* PRICING */}
                  <div className="flex flex-wrap items-baseline gap-1 md:gap-2 mt-auto pt-1">
                    <span className="text-sm md:text-base font-bold tracking-tight text-primary">
                      BDT {item.sale_price.toLocaleString()}
                    </span>
                    {item.has_discount && (
                      <span className="line-through text-muted-foreground text-[10px] md:text-xs font-normal">
                        BDT {item.retail_price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

    </div>

  );
}



<>
{/* <ProductClientView product={product} /> */}
</>