import DarkModeToggle from "../components/DarkModeToggle";
import { products } from "../data/products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          xyzopedia.id
        </h1>
        <DarkModeToggle />
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-200">
        Jual produk digital terpercaya & pengiriman cepat.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="font-semibold text-xl mb-2 text-blue-700 dark:text-blue-300">{p.name}</h2>
            <p className="mb-2 text-gray-600 dark:text-gray-200">{p.desc}</p>
            <div className="mb-4 font-bold text-lg">
              Rp{p.price.toLocaleString()}
            </div>
            <Link href={`/checkout/${p.id}`}>
              <button className="px-4 py-2 rounded-xl bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 transition">
                Beli Sekarang
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
