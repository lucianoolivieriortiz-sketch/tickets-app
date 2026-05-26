export default function CrearUsuarioVoisoPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">Crear Ticket VOISO - Creación de Usuario</h1>

      <form className="bg-white p-6 rounded-2xl shadow max-w-3xl space-y-5">
        <div>
          <label className="block font-semibold mb-2">Nombre del nuevo usuario</label>
          <input className="w-full border p-3 rounded-lg" placeholder="Ej: Pedro González" />
        </div>

        <div>
          <label className="block font-semibold mb-2">Rol solicitado</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona un rol</option>
            <option value="agente">Agente</option>
            <option value="tl">Team Leader</option>
            <option value="ceo">CEO</option>
            <option value="crm">CRM</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Team Leader responsable</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona un Team Leader</option>
            <option value="tl1">Team Leader 1</option>
            <option value="tl2">Team Leader 2</option>
            <option value="tl3">Team Leader 3</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Equipo</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona equipo</option>
            <option value="equipo1">Equipo 1</option>
            <option value="equipo2">Equipo 2</option>
            <option value="equipo3">Equipo 3</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Observaciones</label>
          <textarea className="w-full border p-3 rounded-lg" rows={4} placeholder="Detalles adicionales" />
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