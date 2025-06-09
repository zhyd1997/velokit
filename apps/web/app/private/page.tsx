import { redirect } from "next/navigation";

import { SignOutButton } from "@/modules/users/signout-button";
import { verifySession } from "@/lib/dal/verifySession";
import { getProfileDTO } from "@/lib/dto/user";

export default async function PrivatePage() {
  const session = await verifySession();
  if (!session || !session.user) {
    redirect("/login");
  }

  if (!session.user.email) {
    return <p>Oops, there's no user email!</p>;
  }

  const data = await getProfileDTO(session.user?.email);

  const { username } = data || {};

  return (
    <div>
      <p>👋 {username}</p>

      <SignOutButton />
    </div>
  );
}
