export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-100">

      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-10">
          Ticket System
        </h1>

        <nav className="space-y-4">

          <a
            href="/"
            className="block w-full text-left p-3 rounded-lg hover:bg-gray-800"
          >
            Dashboard
          </a>

          <a
            href="/voiso"
            className="block w-full text-left p-3 rounded-lg hover:bg-gray-800"
          >
            Tickets Voiso
          </a>

          <a
            href="/rdp"
            className="block w-full text-left p-3 rounded-lg hover:bg-gray-800"
          >
            Tickets RDP
          </a>

        </nav>
      </aside>

      <section className="flex-1 p-10">

        <h2 className="text-4xl font-bold mb-6">
          Dashboard
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Tickets Voiso
            </h3>

            <p className="text-5xl font-bold mt-4">
              12
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Tickets RDP
            </h3>

            <p className="text-5xl font-bold mt-4">
              5
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Usuarios
            </h3>

            <p className="text-5xl font-bold mt-4">
              24
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}