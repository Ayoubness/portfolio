import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as importedUseFormStatus } from "react-dom";

// Fallback hook if experimental_useFormStatus is not available
const useFormStatus =
  importedUseFormStatus && typeof importedUseFormStatus === "function"
    ? importedUseFormStatus
    : () => ({ pending: false });

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-blue-600 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-blue-700 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Let's Talk{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
