import { toast } from "sonner";

export const useMessage = () => {
  const successMessage = (message: string) => {
    toast.success(message, {
      duration: 3000,
      className: "text-green-500",
    });
  };
  const errorMessage = (message: string) => {
    toast.error(message, {
      duration: 3000,
      className: "text-red-500",
      closeButton: true,
      position: "top-center",
    });
  };
  return { successMessage, errorMessage };
};
