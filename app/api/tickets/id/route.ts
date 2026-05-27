import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function PATCH(
  req: Request,
  context: any
) {
  try {
    const body = await req.json();

    const id = Number(context.params.id);

    const ticket = await prisma.ticket.update({
      where: {
        id,
      },
      data: {
        estado: body.estado,
      },
    });

    return NextResponse.json(ticket);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Error actualizando ticket",
      },
      {
        status: 500,
      }
    );
  }
}