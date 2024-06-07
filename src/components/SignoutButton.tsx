import { WixClientContext } from "@/app/context/WixClientStoreProvider";
import router, { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

type SignoutButtonProps = {
  className?: string;
};

export default function SignoutButton({ className }: SignoutButtonProps) {
  const router = useRouter();
  const wixClient = useContext(WixClientContext);
  const [loading, setLoading] = useState(false);

  const handleSignout = async () => {
    setLoading(true);
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    Cookies.set("refreshToken", "", {
      expires: 0,
    });
    setLoading(false);
    router.push(logoutUrl);
  };
  return (
    <Button onClick={handleSignout} className={className} disabled={loading}>
      {loading && (
        <span>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        </span>
      )}
      <span>Sign Out</span>
    </Button>
  );
}
