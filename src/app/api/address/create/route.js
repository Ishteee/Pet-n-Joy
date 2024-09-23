// app/api/address/route.js

import prisma from '@/lib/prisma';

export async function POST(req) {
  try {
    const { firstName, lastName, address1, address2, country, state, pincode, mobile, addressName, userId } = await req.json();
    console.log(firstName, lastName, address1, address2, country, state, pincode, mobile, addressName, userId);
    const address = await prisma.address.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        state: state,
        country: country,
        pincode: pincode,
        mobile: mobile,
        addressName: addressName,
        userId: userId,
      },
    });

    return new Response(JSON.stringify(address), { status: 201 });
  } catch (error) {
    console.error("Error saving address:", error); // Log the detailed error in the console for debugging
    return new Response(JSON.stringify({ error: "Failed to save address", details: error.message }), { status: 500 });
  }
}
