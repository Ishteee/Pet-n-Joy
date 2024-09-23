import CreateAddressClient from "./ClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function CreateAddressPage() {
    const session = await getServerSession(authOptions);
    return(
        <CreateAddressClient userId={session.user.id} />
    );
}