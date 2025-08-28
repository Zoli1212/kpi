import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { incidentId: string } }
) {
  try {
    const session = await auth();
    if (!session?.user?.id || !session.user.incidentsReporter) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.incidentId) {
      return new NextResponse("Incident ID missing", { status: 400 });
    }

    const incident = await db.incident.delete({
      where: {
        id: parseInt(params.incidentId),
      },
    });

    return NextResponse.json(incident);
  } catch (error) {
    console.error("[INCIDENT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
