import { useRouter } from "next/router";
import { products } from "../../data/products";
import { useState } from "react";

export default function Checkout() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === id);

  const [form, setForm] = useState({ email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!product) return <div className="p-8">Produk tidak ditemukan.</div>;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulasi submit pesanan
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 py-8 flex flex-col items-center">
      <div className="max-w-md w-full bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
          Checkout: {product.name}
        </h2>
        <div className="mb-4 font-bold text-lg">
          Rp{product.price.toLocaleString()}
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border outline-none dark:bg-gray-700"
                placeholder="Alamat email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Nomor WhatsApp</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border outline-none dark:bg-gray-700"
                placeholder="08xxxxxxxxxx"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-xl bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 transition font-bold"
            >
              Lanjut ke Pembayaran (QRIS)
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 dark:text-green-400">
            Pesanan Anda diterima!<br />
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Pembayaran akan diverifikasi otomatis.<br />
              Produk dikirim maksimal 1x24 jam ke email/WA Anda.<br />
              Untuk update status, cek halaman status atau hubungi admin.
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
