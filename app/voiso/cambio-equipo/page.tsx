export default function CambioEquipoVoisoPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">Crear Ticket VOISO - Cambio de Equipo</h1>

      <form className="bg-white p-6 rounded-2xl shadow max-w-3xl space-y-5">
        <div>
          <label className="block font-semibold mb-2">Agente</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona un agente</option>
            <option value="juan-perez">Juan Pérez</option>
            <option value="maria-lopez">María López</option>
            <option value="carlos-ramirez">Carlos Ramírez</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Team Leader actual</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona TL actual</option>
            <option value="tl1">Team Leader 1</option>
            <option value="tl2">Team Leader 2</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Nuevo Team Leader</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona nuevo TL</option>
            <option value="tl1">Team Leader 1</option>
            <option value="tl2">Team Leader 2</option>
            <option value="tl3">Team Leader 3</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Motivo del cambio</label>
          <textarea className="w-full border p-3 rounded-lg" rows={4} placeholder="Explica el motivo" />
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