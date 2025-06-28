import React from "react";
import { supabase } from "../lib/supabaseClient";
import { LogOut, User, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function UserMenu({ user, onLogout }) {
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      // fallback: clear local storage and reload
      localStorage.removeItem('supabase.auth.token');
      window.location.reload();
    }
    onLogout?.();
  };

  // Mobile view: show dropdown menu
  const mobileMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 rounded-lg hover:bg-accent transition-colors md:hidden">
        <Menu size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem className="flex items-center gap-2">
          <User size={16} />
          <span className="text-sm truncate">{user?.email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-500 hover:text-red-600"
          onClick={handleLogout}
        >
          <LogOut size={16} className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  // Desktop view: show full menu
  const desktopMenu = (
    <div className="hidden md:flex items-center gap-2">
      <div className="flex items-center gap-2 px-3 py-1 rounded bg-muted text-muted-foreground">
        <User size={16} />
        <span className="text-sm truncate max-w-[200px]">{user?.email}</span>
      </div>
      <button
        className="p-2 rounded hover:bg-accent transition"
        onClick={handleLogout}
        title="Logout"
      >
        <LogOut size={16} />
      </button>
    </div>
  );

  return (
    <div className="relative flex items-center gap-2">
      {mobileMenu}
      {desktopMenu}
    </div>
  );
}
