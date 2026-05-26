import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const ticket = await prisma.ticket.create({
      data: {
        titulo: body.titulo,
        descripcion: body.descripcion,
        area: body.area,
        prioridad: body.prioridad,
        creadoPor: body.creadoPor,
      },
    });

    return NextResponse.json(ticket);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Error creando ticket" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(tickets);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Error obteniendo tickets" },
      { status: 500 }
    );
  }
}