import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import FailureClientComponent from "./FailureClientComponent";

export default async function FailurePage({ params }) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  const { transactionId } = params;
  console.log(transactionId);

  return (
    <FailureClientComponent transactionId={transactionId}/>
  );
};