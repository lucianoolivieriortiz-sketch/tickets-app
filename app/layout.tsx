import "./globals.css";

export const metadata = {
  title: "Ticket System",
  description: "Sistema de Tickets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              Home
            </a>

            <a href="/voiso" className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition">
              Tickets Voiso
            </a>

            <a href="/rdp" className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition">
              Tickets RDP
            </a>

            <a href="/admin/usuarios" className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition">
              Admin Usuarios
            </a>

            <a href="/logout" className="bg-red-700 px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Cerrar sesión
            </a>
          </div>

          <h1 className="text-xl font-bold">
            Ticket System
          </h1>
        </header>

        {children}
      </body>
    </html>
  );
}