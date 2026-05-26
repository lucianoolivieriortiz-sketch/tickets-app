export default function AdminUsuariosPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Admin - Usuarios y Accesos
      </h1>

      <form className="bg-white p-6 rounded-2xl shadow max-w-3xl space-y-5">
        <div>
          <label className="block font-semibold mb-2">Nombre completo</label>
          <input className="w-full border p-3 rounded-lg" placeholder="Ej: Juan Pérez" />
        </div>

        <div>
          <label className="block font-semibold mb-2">Usuario de acceso</label>
          <input className="w-full border p-3 rounded-lg" placeholder="Ej: juan.ceo" />
        </div>

        <div>
          <label className="block font-semibold mb-2">Contraseña asignada por ADMIN</label>
          <input type="password" className="w-full border p-3 rounded-lg" placeholder="Contraseña temporal o fija" />
          <p className="text-sm text-gray-500 mt-2">
            Solo el administrador puede crear o cambiar esta contraseña.
          </p>
        </div>

        <div>
          <label className="block font-semibold mb-2">Rol</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="">Selecciona rol</option>
            <option value="ADMIN">ADMIN</option>
            <option value="CEO">CEO</option>
            <option value="TL">Team Leader</option>
          </select>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl space-y-3">
          <h2 className="text-xl font-bold">Permisos del usuario</h2>

          <label className="flex gap-3 items-center">
            <input type="checkbox" />
            Acceso a TICKETS VOISO
          </label>

          <label className="flex gap-3 items-center">
            <input type="checkbox" />
            Acceso a TICKETS RDP
          </label>
        </div>

        <div>
          <label className="block font-semibold mb-2">Equipos asignados</label>
          <select className="w-full border p-3 rounded-lg" multiple>
            <option value="equipo1">Equipo 1</option>
            <option value="equipo2">Equipo 2</option>
            <option value="equipo3">Equipo 3</option>
          </select>
          <p className="text-sm text-gray-500 mt-2">
            Para seleccionar varios equipos, mantén presionada la tecla CTRL.
          </p>
        </div>

        <div>
          <label className="block font-semibold mb-2">Estado del acceso</label>
          <select className="w-full border p-3 rounded-lg">
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Crear usuario
        </button>
      </form>
    </main>
  );
}