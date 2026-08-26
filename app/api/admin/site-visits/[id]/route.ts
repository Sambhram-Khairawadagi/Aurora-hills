import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();

    const updatedVisit = await db.siteVisit.update({
      where: { id },
      data: {
        status: data.status !== undefined ? data.status : undefined,
      },
    });
    return NextResponse.json(updatedVisit);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update site visit" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await db.siteVisit.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete site visit" }, { status: 500 });
  }
}
