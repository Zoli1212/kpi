import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id || !session.user.incidentsReporter) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const {
      type, 
      companyId, 
      systemId, 
      description, 
      beginning, 
      end, 
      urgency, 
      criticality
    } = body;

    if (!type || !companyId || !systemId || !description || !beginning || !end || !urgency || !criticality) {
        return new NextResponse("Missing required fields", { status: 400 });
    }

    const incident = await db.incident.create({
      data: {
        type,
        companyId: parseInt(companyId),
        systemId: parseInt(systemId),
        description,
        beginning: new Date(beginning),
        end: new Date(end),
        urgency,
        criticality,
        reporterId: parseInt(session.user.id),
        creatorId: parseInt(session.user.id), // Assuming creator is the reporter for now
        handlerId: parseInt(session.user.id), // Placeholder, might need a dedicated handler assignment UI
        detectionTime: new Date(), // Or get from form
        ready: true, // Or based on form input
      },
    });

    return NextResponse.json(incident);
  } catch (error) {
    console.error("[INCIDENTS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
