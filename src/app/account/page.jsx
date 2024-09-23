import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AccountClientComponent from "./AccountClientComponent";
import { NextResponse } from "next/server";

const AccountPage = async () => {
  // Fetch the session to get user details
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect if not signed in
    return NextResponse.redirect("/api/auth/signin");
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-[#e85c7c] flex justify-center items-center">
      {/* Pass the user details to the client component */}
      <AccountClientComponent user={user} />
    </div>
  );
};

export default AccountPage;
