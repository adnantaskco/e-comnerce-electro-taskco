// "use client";

// import { useState } from "react";

// export default function ProductClientView({ product }) {
//   // Initialize state cleanly using properties from the injected product prop
//   const [activeImage, setActiveImage] = useState(product.images?.[0] || "");
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState("description");

//   const handleQuantityChange = (type) => {
//     if (type === "dec" && quantity > 1) setQuantity((prev) => prev - 1);
//     if (type === "inc") setQuantity((prev) => prev + 1);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans antialiased text-[#242424]">
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
        
//         {/* Breadcrumb Navigation */}
//         <nav className="flex items-center space-x-2 text-xs md:text-sm text-gray-400 mb-8 border-b border-gray-100 pb-4">
//           <a href="#" className="hover:text-[#333e48] transition">Home</a>
//           <span>/</span>
//           <a href="#" className="hover:text-[#333e48] transition">Appliances</a>
//           <span>/</span>
//           <span className="text-gray-600 font-medium">{product.name}</span>
//         </nav>

//         {/* Main Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
//           {/* Left Block: WoodMart Sticky Image Section */}
//           <div className="lg:col-span-5 space-y-4">
//             <div className="relative bg-[#f9f9f9] border border-gray-100 rounded-lg p-6 flex justify-center items-center aspect-square overflow-hidden group">
//               {product.has_discount && (
//                 <span className="absolute top-4 left-4 bg-[#83b735] text-white text-xs font-bold px-2.5 py-1 rounded tracking-wide uppercase">
//                   Sale
//                 </span>
//               )}
//               <img 
//                 src={activeImage} 
//                 alt={product.name} 
//                 className="object-contain max-h-[420px] w-full mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>

//             {/* Thumbnail Navigation Track */}
//             <div className="flex gap-3 overflow-x-auto pb-2">
//               {product.images?.map((img, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveImage(img)}
//                   className={`w-20 h-20 flex-shrink-0 border-2 rounded p-1 bg-white flex items-center justify-center transition-all ${
//                     activeImage === img ? 'border-[#3b82f6]' : 'border-gray-200 hover:border-gray-400'
//                   }`}
//                 >
//                   <img src={img} alt={`View ${index + 1}`} className="object-contain max-h-full mix-blend-multiply" />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right Block: Product Checkout Details */}
//           <div className="lg:col-span-7 flex flex-col justify-between">
//             <div>
//               {/* Product Identifiers & Meta */}
//               <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
//                 <span className="text-xs font-bold uppercase tracking-wider text-[#83b735]">
//                   Brand: {product.brand}
//                 </span>
//                 <div className="flex items-center space-x-2 text-sm">
//                   <div className="text-yellow-400 flex">
//                     {'★'.repeat(Math.floor(product.review || 5))}
//                     {product.review % 1 !== 0 ? '½' : ''}
//                   </div>
//                   <span className="text-gray-500 font-semibold text-xs">({product.review} Rating)</span>
//                 </div>
//               </div>

//               {/* Title Header */}
//               <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-[#242424] mb-2">
//                 {product.name}
//               </h1>
//               <p className="text-xs text-gray-400 mb-6">
//                 SKU: <span className="text-gray-600 font-medium">{product.id}930043</span> | 
//                 <span className="text-[#83b735] font-semibold ml-2">🔥 {product.sold_amount} items sold</span>
//               </p>

//               {/* WoodMart Signature Logistics Options Cards */}
//               <div className="border border-gray-100 bg-[#f9f9f9] rounded-lg p-4 space-y-3.5 mb-6 text-xs md:text-sm">
//                 <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//                   <div>
//                     <p className="font-bold text-gray-800">Pick up from the Store</p>
//                     <p className="text-xs text-gray-500">Ready to collect today</p>
//                   </div>
//                   <span className="text-[#83b735] font-bold uppercase tracking-wider">Free</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-bold text-gray-800">Standard Courier Delivery</p>
//                     <p className="text-xs text-gray-500">Delivered straight to your doorstep (2-3 Days)</p>
//                   </div>
//                   <span className="text-gray-700 font-bold">$40.00</span>
//                 </div>
//               </div>

//               {/* Dynamic Price Render */}
//               <div className="mb-8 border-b border-gray-100 pb-6">
//                 <div className="flex items-baseline space-x-4">
//                   <span className="text-4xl font-bold text-[#3b82f6]">
//                     ৳{product.sale_price?.toLocaleString()}
//                   </span>
//                   {product.has_discount && (
//                     <span className="text-lg text-gray-400 line-through">
//                       ৳{product.retail_price?.toLocaleString()}
//                     </span>
//                   )}
//                 </div>
//                 {product.has_discount && (
//                   <p className="text-xs text-red-500 font-semibold mt-1.5 bg-red-50 inline-block px-2 py-0.5 rounded">
//                     You save ৳{product.discount_price?.toLocaleString()} on this purchase!
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Actions: Quantity Selector & CTA Buttons */}
//             <div className="space-y-4">
//               <div className="flex flex-col sm:flex-row gap-4">
//                 {/* WoodMart Grid Style Quantity Controller */}
//                 <div className="flex items-center border border-gray-200 rounded-md bg-[#f9f9f9] max-w-[130px] w-full justify-between overflow-hidden">
//                   <button 
//                     onClick={() => handleQuantityChange('dec')}
//                     className="w-10 h-11 text-gray-500 hover:bg-gray-200 font-medium text-lg transition-colors"
//                   >
//                     -
//                   </button>
//                   <span className="font-semibold text-sm w-8 text-center">{quantity}</span>
//                   <button 
//                     onClick={() => handleQuantityChange('inc')}
//                     className="w-10 h-11 text-gray-500 hover:bg-gray-200 font-medium text-lg transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>
                
//                 {/* Actions Buttons */}
//                 <button className="flex-1 bg-[#3b82f6] text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 active:scale-[0.99] transition uppercase tracking-wider text-xs shadow-md shadow-blue-100">
//                   Add To Cart
//                 </button>
//                 <button className="flex-1 bg-[#242424] text-white font-bold py-3 px-8 rounded-md hover:bg-black active:scale-[0.99] transition uppercase tracking-wider text-xs">
//                   Buy Now
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Tabbed Supplementary Content Section */}
//         <div className="mt-16 border-t border-gray-100 pt-8">
//           <div className="flex space-x-8 border-b border-gray-200 mb-6 text-sm md:text-base">
//             <button 
//               onClick={() => setActiveTab('description')}
//               className={`pb-3 font-bold transition-all border-b-2 uppercase tracking-wide ${
//                 activeTab === 'description' ? 'text-[#3b82f6] border-[#3b82f6]' : 'text-gray-400 border-transparent hover:text-gray-600'
//               }`}
//             >
//               Description
//             </button>
//             <button 
//               onClick={() => setActiveTab('specifications')}
//               className={`pb-3 font-bold transition-all border-b-2 uppercase tracking-wide ${
//                 activeTab === 'specifications' ? 'text-[#3b82f6] border-[#3b82f6]' : 'text-gray-400 border-transparent hover:text-gray-600'
//               }`}
//             >
//               Specification
//             </button>
//           </div>
          
//           {/* Tab Content Panels */}
//           <div className="text-sm md:text-base text-gray-600 leading-relaxed max-w-none">
//             {activeTab === 'description' ? (
//               <div className="space-y-4">
//                 <p>
//                   The <strong className="text-gray-900">{product.name}</strong> provides reliable, high-performance capabilities optimized for modern use. Built with premium materials by <span className="text-gray-900 font-medium">{product.brand}</span>, this item prioritizes user convenience and ergonomic performance variables cleanly.
//                 </p>
//               </div>
//             ) : (
//               <div className="overflow-hidden border border-gray-100 rounded-lg max-w-xl">
//                 <table className="min-w-full divide-y divide-gray-100 text-left">
//                   <tbody className="divide-y divide-gray-100 bg-white">
//                     <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold text-gray-900 w-1/3">Brand</td><td className="px-4 py-3">{product.brand}</td></tr>
//                     <tr><td className="px-4 py-3 font-semibold text-gray-900">Product Identifier</td><td className="px-4 py-3">#{product.id}</td></tr>
//                     <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold text-gray-900">Slug Target</td><td className="px-4 py-3"><code>{product.slug}</code></td></tr>
//                     <tr><td className="px-4 py-3 font-semibold text-gray-900">Standard Rating</td><td className="px-4 py-3">{product.review} / 5.0</td></tr>
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }