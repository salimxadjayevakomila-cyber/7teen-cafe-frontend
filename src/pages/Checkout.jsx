import React, { useState } from 'react';
import instance from '../utils/axios';

export const Checkout = () => {
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    paymentMethod: 'cash', 
    comment: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
 
    instance.post('/orders', formData)
      .then((res) => {
        console.log('Buyurtma qabul qilindi:', res.data);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.error('Xatolik yuz berdi:', err);
        alert('Buyurtmani yuborishda xatolik yuz berdi!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

 
  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto my-10 p-6 bg-green-50 border border-green-200 rounded-xl text-center shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-2">Rahmat! Buyurtmangiz qabul qilindi. 🎉</h2>
        <p className="text-gray-600 mb-4">Tez orada operatorlarimiz siz bilan bog'lanishadi.</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Bosh sahifaga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-md rounded-xl border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Buyurtmani rasmiylashtirish</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To'liq ismingiz</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Ali Valiyev"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefon raqamingiz</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+998 90 123 45 67"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

    
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Yetkazib berish manzili</label>
          <textarea
            name="address"
            required
            rows="3"
            placeholder="Toshkent sh., Chilonzor tumani..."
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To'lov turi</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="cash">Naqd pul orqali</option>
            <option value="card">Karta orqali (Click / Payme)</option>
          </select>
        </div>

    
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Qo'shimcha izoh (ixtiyoriy)</label>
          <input
            type="text"
            name="comment"
            placeholder="Kuryer uchun eslatma..."
            value={formData.comment}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {isLoading ? 'Yuborilmoqda...' : 'Buyurtmani tasdiqlash'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;