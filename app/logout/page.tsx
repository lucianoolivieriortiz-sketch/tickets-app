"use client";

import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "/login";
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p>Cerrando sesión...</p>
    </main>
  );
}