import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideToast } from "../features/ui/uiSlice";

export default function Toast() {
  const { toast } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        dispatch(hideToast(''));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show, dispatch]);

  if (!toast.show) return null;

  const bg =
    toast.type === "success"
      ? "bg-green-500"
      : toast.type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      className={`fixed top-4 right-4 text-white px-4 py-2 rounded shadow-md ${bg} transition-all duration-300`}
    >
      {toast.message}
    </div>
  );
}
