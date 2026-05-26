export default function NumerosVoisoPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">Crear Ticket VOISO - Solicitud de Números</h1>

      <form className="bg-white p-6 rounded-2xl shadow max-w-3xl space-y-5">
        <div>
          <label className="block font-semibold mb-2">GEO del número</label>
          <input className="w-full border p-3 rounded-lg" placeholder="Ej: México, Colombia, Chile" />
        </div>

        <div>
          <label className="block font-semibold mb-2">Equipo que lo usará</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona equipo</option>
            <option value="equipo1">Equipo 1</option>
            <option value="equipo2">Equipo 2</option>
            <option value="equipo3">Equipo 3</option>
          </select>
        </div>

        <p className="bg-yellow-100 p-4 rounded-lg">
          La aprobación puede tardar entre 1 y 7 días hábiles dependiendo de la disponibilidad.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Enviar ticket
        </button>
      </form>
    </main>
  );
}