import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const defaultSettings = {
  startingPrice: "₹42 Lakhs",
  phoneNumbers: JSON.stringify(["9019765265", "7019165265", "9880166275", "9242508288"]),
  primaryPhone: "9019765265",
  whatsappNumber: "9019765265",
  announcementText: "Hosa Lifestyle, Hosa Dharwad – Pre-Launch Exclusive Plot Opportunities Open",
  heroTitle: "LIVE CLOSER TO NATURE. INVEST IN TOMORROW.",
  heroSubtitle: "A premium, thoughtfully planned plotted community in Dharwad City, designed around lifestyle, connectivity, greenery and long-term value.",
  projectLocation: "Dharwad City, Karnataka (Near NH-4 Highway)",
  mapUrl: "https://share.google/lhDyTbBa3vWnMhOFK",
  approvals: JSON.stringify(["NA-KJP Approved", "HDUDA Approved", "Bank Loans Approved", "Property Tax Updated"]),
  brochureUrl: "/brochure/the-aurora-hills-brochure.pdf",
};

export async function GET() {
  try {
    let settings = await db.siteSettings.findUnique({
      where: { id: "default" },
    });

    if (!settings) {
      settings = await db.siteSettings.create({
        data: {
          id: "default",
          ...defaultSettings,
        },
      });
    }

    return NextResponse.json({
      ...settings,
      phoneNumbers: JSON.parse(settings.phoneNumbers),
      approvals: JSON.parse(settings.approvals),
      // Map schema fields to the frontend expected ones (camelCase to snake_case if needed, but the frontend expects snake_case based on original implementation)
      starting_price: settings.startingPrice,
      primary_phone: settings.primaryPhone,
      whatsapp_number: settings.whatsappNumber,
      announcement_text: settings.announcementText,
      hero_title: settings.heroTitle,
      hero_subtitle: settings.heroSubtitle,
      project_location: settings.projectLocation,
      map_url: settings.mapUrl,
      brochure_url: settings.brochureUrl,
      village_details: settings.villageDetails,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();

    const updated = await db.siteSettings.upsert({
      where: { id: "default" },
      update: {
        startingPrice: data.starting_price,
        primaryPhone: data.primary_phone,
        whatsappNumber: data.whatsapp_number,
        announcementText: data.announcement_text,
        villageDetails: data.village_details,
      },
      create: {
        id: "default",
        ...defaultSettings,
        startingPrice: data.starting_price || defaultSettings.startingPrice,
        primaryPhone: data.primary_phone || defaultSettings.primaryPhone,
        whatsappNumber: data.whatsapp_number || defaultSettings.whatsappNumber,
        announcementText: data.announcement_text || defaultSettings.announcementText,
        villageDetails: data.village_details || null,
      },
    });

    return NextResponse.json({
      ...updated,
      starting_price: updated.startingPrice,
      primary_phone: updated.primaryPhone,
      whatsapp_number: updated.whatsappNumber,
      announcement_text: updated.announcementText,
      village_details: updated.villageDetails,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
