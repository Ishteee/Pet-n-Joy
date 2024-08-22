import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

async function getSession() {
    const session = await getServerSession(authOptions);
    return session;
}

export default getSession;

// if(session?.user) {
//     return session?.user.username
// } else {
//     return null;
// }

