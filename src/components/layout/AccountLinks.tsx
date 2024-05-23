import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const AccountLinks = () => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="h-full block">
          <div className="flex items-center gap-1 text-sm">
            <UserIcon width={22} height={22} />
            <span>Username</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/account" className="w-full text-sm">
              Profile Page
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/signout" className="w-full text-sm">
              Sign Out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex gap-4 items-center">
      <Button size={'sm'} variant={'secondary'} asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
};

export default AccountLinks;
