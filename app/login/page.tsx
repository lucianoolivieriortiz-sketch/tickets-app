"use client";

import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const password = form.get("password");

    if (username === "Luciano" && password === "231231LucOli") {
      document.cookie = "auth=Luciano; path=/";
      window.location.href = "/";
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={login} className="bg-white p-8 rounded-2xl shadow w-full max-w-md space-y-5">
        <h1 className="text-3xl font-bold text-center">Iniciar Sesión</h1>

        <input name="username" className="w-full border p-3 rounded-lg" placeholder="Usuario" />

        <input name="password" type="password" className="w-full border p-3 rounded-lg" placeholder="Contraseña" />

        {error && <p className="text-red-600">{error}</p>}

        <button className="w-full bg-black text-white px-6 py-3 rounded-lg">
          Entrar
        </button>
      </form>
    </main>
  );
}