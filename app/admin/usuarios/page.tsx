"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [tickets, setTickets] = useState<any[]>([]);

  async function cargarTickets() {
    const res = await fetch("/api/tickets");
    const data = await res.json();
    setTickets(data);
  }

  async function cambiarEstado(id: number, estado: string) {
    await fetch(`/api/tickets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado,
      }),
    });

    cargarTickets();
  }

  useEffect(() => {
    cargarTickets();
  }, []);

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Panel Administrativo
      </h1>

      <div className="grid gap-5">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  {ticket.numero}
                </h2>

                <p>
                  <b>Solicitante:</b>{" "}
                  {ticket.solicitante}
                </p>

                <p>
                  <b>Cuenta:</b>{" "}
                  {ticket.cuenta}
                </p>

                <p>
                  <b>Oficina:</b>{" "}
                  {ticket.oficina}
                </p>

                <p>
                  <b>Tipo:</b>{" "}
                  {ticket.tipo}
                </p>

                <p>
                  <b>Estado:</b>{" "}
                  {ticket.estado}
                </p>

                <p>
                  <b>Prioridad:</b>{" "}
                  {ticket.prioridad}
                </p>

                <p>
                  <b>Tiempo:</b>{" "}
                  {ticket.tiempoEspera}
                </p>

                <p className="mt-3">
                  {ticket.descripcion}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() =>
                    cambiarEstado(
                      ticket.id,
                      "EN PROCESO"
                    )
                  }
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  En proceso
                </button>

                <button
                  onClick={() =>
                    cambiarEstado(
                      ticket.id,
                      "COMPLETADO"
                    )
                  }
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Completar
                </button>

                <button
                  onClick={() =>
                    cambiarEstado(
                      ticket.id,
                      "CANCELADO"
                    )
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}