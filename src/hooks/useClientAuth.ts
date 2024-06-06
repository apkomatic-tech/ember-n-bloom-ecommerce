import { WixClientContext } from "@/app/context/WixClientStoreProvider";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export const useClientAuth = () => {
  const path = usePathname();
  const {
    members,
    auth: { loggedIn },
  } = useContext(WixClientContext);

  type Member =
    | Awaited<ReturnType<typeof members.getCurrentMember>>["member"]
    | null;

  const [user, setUser] = useState<Member>(null);

  const getUser = async () => {
    if (loggedIn()) {
      const currentMember = await members.getCurrentMember();
      setUser(currentMember.member as typeof currentMember.member);
    }
  };

  useEffect(() => {
    getUser();
  }, [path]);

  return {
    loggedIn: loggedIn(),
    user,
  };
};
