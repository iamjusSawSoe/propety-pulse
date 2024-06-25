"use client";
import { useRouter } from "next/navigation";

const PropertiesIDPage = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/")} className="bg-blue-500 p-2">
        Go Home
      </button>
    </div>
  );
};

export default PropertiesIDPage;
