import SuccessClientComponent from "./SuccessClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function SuccessPage({ params }) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  const { transactionId } = params;
  console.log(transactionId);

  return (
    <SuccessClientComponent transactionId={transactionId}/>
  );
};
