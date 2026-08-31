 import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import instance from "../utils/axios";
import OrderTracker from "../components/OrderTracker";

export default function TrackOrder() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // URL'dagi ?id=... ni oladi
  const [order, setOrder] = useState(null);

  const fetchOrder = () => {
    if (!id) return;
    instance
      .get(`/orders/${id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log("Xatolik:", err));
  };

  useEffect(() => {
    fetchOrder();
    const interval = setInterval(fetchOrder, 5000);
    return () => clearInterval(interval);
  }, [id]);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 font-medium">
        Zakaz ma'lumotlari yuklanmoqda...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-md mx-auto space-y-4">
        <OrderTracker currentStatus={order.status} />
        
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-sm">
          <p className="font-bold text-gray-800 border-b pb-2 mb-3">
            Zakaz #TICKET-{order._id?.slice(-6).toUpperCase()}
          </p>
          <div className="space-y-1 text-gray-600">
            <p>Mijoz: <span className="font-semibold text-gray-800">{order.customerName || "Mehmon"}</span></p>
            <p>Jami summa: <span className="font-bold text-green-700">{order.totalPrice?.toLocaleString()} so'm</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}