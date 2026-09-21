import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, requirementType, product, quantity, message } = body;

    if (!name || !phone || !city) {
      return NextResponse.json(
        { error: "Name, Phone Number, and City are required fields." },
        { status: 400 }
      );
    }

    const enquiryPayload = {
      id: `ENQ-${Date.now()}`,
      created_at: new Date().toISOString(),
      name,
      phone,
      email: email || null,
      city,
      requirement_type: requirementType || "Green Gym",
      product: product || null,
      quantity: quantity || "1",
      message: message || null,
      source: "AMEY INDUSTRIES Website Form",
    };

    // Optional Supabase submission if environment variables are present
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/enquiries`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(enquiryPayload),
        });
      } catch (err) {
        console.warn("Optional Supabase backup failed, proceeding with standard response:", err);
      }
    }

    console.log("=== NEW LEAD RECEIVED FOR AMEY INDUSTRIES ===", enquiryPayload);

    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been received. AMEY INDUSTRIES will contact you shortly.",
      enquiryId: enquiryPayload.id,
    });
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
