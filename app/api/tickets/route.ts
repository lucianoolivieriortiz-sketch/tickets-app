import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const area = body.area || "VOISO";
    const tipo = body.tipo || "soporte";

    const tiempos: any = {
      soporte: "Hasta 4 horas",
      usuario: "Hasta 4 horas",
      cambio: "Hasta 4 horas",
      numeros: "Entre 1 y 7 días hábiles",
      "Soporte VOISO": "Hasta 4 horas",
      "Solicitud de Números": "Entre 1 y 7 días hábiles",
      "Creación de Usuario": "Hasta 4 horas",
      "Cambio de Equipo": "Hasta 4 horas",
    };

    const total = await prisma.ticket.count({
      where: { area },
    });

    const siguienteNumero = total + 1;
    const prefijo = area === "RDP" ? "RDP" : "VOISO";
    const numero = `${prefijo}-${String(siguienteNumero).padStart(4, "0")}`;

    const ticket = await prisma.ticket.create({
      data: {
        numero,
        tipo,
        descripcion: body.descripcion || "",
        area,
        prioridad: body.prioridad || "MEDIA",
        estado: "PENDIENTE",
        tiempoEspera:
          body.tiempoEspera || tiempos[tipo] || "Pendiente de revisión",
        solicitante: body.solicitante || "Luciano",
        oficina: body.oficina || "Sin oficina",
        cuenta: body.cuenta || "VOISO",
        creadoPor: body.creadoPor || "Luciano",
      },
    });

    return NextResponse.json({
      ok: true,
      numero: ticket.numero,
      espera: ticket.tiempoEspera,
      posicion: siguienteNumero,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { ok: false, error: "Error creando ticket" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const tickets = await prisma.ticket.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(tickets);
}