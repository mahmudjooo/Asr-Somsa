import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSamsas } from "../store/slice/sliceSamsa";
import type { RootState, AppDispatch } from "../store";

export default function SamsasPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { samsas, loading, error } = useSelector(
    (state: RootState) => state.samsas
  );

  useEffect(() => {
    dispatch(fetchSamsas());
  }, [dispatch]);

  if (loading)
    return (
      <p className="text-gray-800 dark:text-gray-200 text-center mt-8">
        Loading...
      </p>
    );

  if (error) return <p className="text-red-500 text-center mt-8">{error}</p>;

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Samsas
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {samsas.map((s) => (
          <div
            key={s.id}
            className="border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
          >
            <img
              src={s.image}
              alt={s.name}
              className="w-full h-52 object-cover rounded mb-2"
            />
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-base mb-1">
              {s.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
              {s.description}
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
              {s.price} so'm
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
