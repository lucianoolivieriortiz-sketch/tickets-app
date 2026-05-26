export default function SoporteVoisoPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Crear Ticket VOISO - Soporte
      </h1>

      <form className="bg-white p-6 rounded-2xl shadow max-w-3xl space-y-5">

        <div>
          <label className="block font-semibold mb-2">
            Nombre del agente
          </label>

          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona un agente</option>
            <option value="juan-perez">Juan Pérez</option>
            <option value="maria-lopez">María López</option>
            <option value="carlos-ramirez">Carlos Ramírez</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Número de cliente
          </label>

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Ej: 5551234567"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Problema suscitado
          </label>

          <textarea
            className="w-full border p-3 rounded-lg"
            rows={5}
            placeholder="Describe el problema"
          />
        </div>

        <p className="bg-yellow-100 p-4 rounded-lg">
          Su solicitud puede tardar hasta 4 horas en ejecutarse.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Enviar ticket
        </button>

      </form>
    </main>
  );
}