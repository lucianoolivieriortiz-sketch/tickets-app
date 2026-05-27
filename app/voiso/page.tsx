"use client";

import { useState } from "react";

export default function VoisoPage() {
  const [tipo, setTipo] = useState("Soporte VOISO");
  const [solicitante, setSolicitante] = useState("");
  const [oficina, setOficina] = useState("");
  const [descripcion, setDescripcion] = useState("");

  async function crearTicket() {
    try {
      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          tipo,
          solicitante,
          oficina,
          descripcion,

          cuenta: "VOISO",

          prioridad: "MEDIA",
          creadoPor: solicitante,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert("Error creando ticket");
        return;
      }

      alert(
        `Ticket creado: ${data.numero}\n\nTiempo estimado: ${data.espera}\n\nPosición en cola: ${data.posicion}`
      );

      setDescripcion("");
    } catch (error) {
      console.error(error);
      alert("Error creando ticket");
    }
  }

  return (
    <main className="p-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">
          Crear Ticket VOISO
        </h1>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Solicitante"
            value={solicitante}
            onChange={(e) => setSolicitante(e.target.value)}
            className="w-full border p-4 rounded text-black"
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Oficina / Proyecto"
            value={oficina}
            onChange={(e) => setOficina(e.target.value)}
            className="w-full border p-4 rounded text-black"
          />
        </div>

        <div className="mb-5">
          <label className="font-bold block mb-2">
            Requerimiento o solicitud
          </label>

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full border p-4 rounded text-black"
          >
            <option>Soporte VOISO</option>
            <option>Solicitud de Números</option>
            <option>Creación de Usuario</option>
            <option>Cambio de Equipo</option>
            <option>Problema de Audio</option>
            <option>Error de Login</option>
          </select>
        </div>

        <div className="mb-6">
          <textarea
            placeholder="Detalle del problema"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full border p-4 rounded text-black h-40"
          />
        </div>

        <button
          onClick={crearTicket}
          disabled={
            !tipo ||
            !solicitante ||
            !oficina ||
            !descripcion
          }
          className="bg-black text-white px-8 py-4 rounded w-full text-xl hover:bg-gray-800 disabled:opacity-50"
        >
          Enviar solicitud
        </button>
      </div>
    </main>
  );
}