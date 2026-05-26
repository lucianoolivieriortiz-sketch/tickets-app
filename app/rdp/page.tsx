export default function RdpPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Tickets RDP
      </h1>

      <div className="grid gap-6">

        <a
          href="/rdp/reinicio"
          className="block bg-white p-6 rounded-2xl shadow hover:scale-[1.01] transition"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Reinicio RDP
          </h2>

          <p className="text-gray-600">
            Solicitar reinicio porque el RDP se congeló.
          </p>
        </a>

        <a
          href="/rdp/nuevo"
          className="block bg-white p-6 rounded-2xl shadow hover:scale-[1.01] transition"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Solicitar Nuevo RDP
          </h2>

          <p className="text-gray-600">
            Solicitud de creación de nuevo RDP para un agente.
          </p>
        </a>

      </div>
    </main>
  );
}