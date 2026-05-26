"use client";

import { useState } from "react";

export default function VoisoPage() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  async function crearTicket() {
    console.log("CLICK FUNCIONA");

    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo,
        descripcion,
        area: "VOISO",
        prioridad: "MEDIA",
        creadoPor: "Luciano",
      }),
    });

    console.log(res);

    if (res.ok) {
      alert("Ticket creado");

      setTitulo("");
      setDescripcion("");
    }
  }

  return (
    <main className="p-10">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-xl">
        <h1 className="text-2xl font-bold mb-4">
          Crear Ticket Voiso
        </h1>

        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          className="border w-full p-3 rounded mb-4"
        />

        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          className="border w-full p-3 rounded mb-4"
        />

        <button
          type="button"
          onClick={crearTicket}
          className="bg-black text-white px-4 py-3 rounded-lg w-full cursor-pointer"
        >
          Crear Ticket
        </button>
      </div>
    </main>
  );
}