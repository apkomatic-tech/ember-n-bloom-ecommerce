import { members } from "@wix/members";
import { WixClientContext } from "@/app/context/WixClientStoreProvider";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export const useClientAuth = () => {
  type Member = members.Member | null;
  const path = usePathname();
  const {
    members,
    auth: { loggedIn },
  } = useContext(WixClientContext);

  const [user, setUser] = useState<Member>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setIsFetching(true);
      if (loggedIn()) {
        const currentMember = await members.getCurrentMember();
        setUser(currentMember.member ?? null);
      }
      setIsFetching(false);
    };
    getUser();
  }, [path, loggedIn, members]);

  return {
    loggedIn: loggedIn(),
    user,
    isFetching,
  };
};
