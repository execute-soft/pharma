import { ReactNode, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronsLeft, ChevronsRight, LayoutDashboard, Package, Users, Settings, BarChart, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserProfileDropdown } from "@/common/user-profile-dropdown";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { LucideIcon } from "lucide-react";

type DashboardLayoutProps = {
  children?: ReactNode;
};

/**
 * Responsive dashboard layout with a collapsible sidebar and a top toolbar.
 * When collapsed, the sidebar shows icons only; expanded shows icons + labels.
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const user = {
    name: "Pharma Admin",
    email: "admin@pharma.app",
    role: "Admin",
  };

  type NavChild = { to: string; label: string };
  type NavItem = { to?: string; icon: LucideIcon; label: string; children?: NavChild[] };

  const navItems: NavItem[] = [
    { to: "/pharma", icon: LayoutDashboard, label: "Dashboard" },
    {
      icon: Package,
      label: "Inventory",
      children: [
        { to: "/pharma/inventory", label: "All Items" },
        { to: "/pharma/inventory/alerts", label: "Stock Alerts" },
      ],
    },
    {
      icon: Users,
      label: "Customers",
      children: [
        { to: "/pharma/customers", label: "All Customers" },
        { to: "/pharma/customers/segments", label: "Segments" },
      ],
    },
    { to: "/pharma/analytics", icon: BarChart, label: "Analytics" },
  ];

  const location = useLocation();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const isGroupActive = (item: NavItem) => {
    if (item.to) {
      if (item.to === "/pharma") return location.pathname === item.to;
      return location.pathname.startsWith(item.to);
    }
    if (item.children) return item.children.some((c) => location.pathname.startsWith(c.to));
    return false;
  };

  const toggleGroup = (key: string) => setOpenGroups((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <div className="relative z-10 flex h-screen w-full overflow-hidden text-foreground">
        {/* Sidebar */}
        <aside className={cn("flex h-full shrink-0 flex-col border-r border-border/50 bg-background/60 backdrop-blur-md transition-all duration-300", collapsed ? "w-16" : "w-64")}>
          <div className="flex h-14 items-center justify-between px-3">
            <Link to="/pharma" className="flex items-center gap-2">
              <img src="/vite.svg" alt="logo" className="h-6 w-6" />
              {!collapsed && <span className="text-sm font-semibold">Pharma</span>}
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setCollapsed((v) => !v)} aria-label="Toggle sidebar">
              {collapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
            </Button>
          </div>
          <Separator />
          <nav className="flex flex-1 flex-col gap-1 p-2">
            {navItems.map((item) => {
              const active = isGroupActive(item);
              const key = item.label;
              const open = openGroups[key] ?? active;
              const rowClasses = cn("flex items-center gap-3 rounded px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground", active && "bg-accent text-accent-foreground", collapsed && "justify-center");

              if (!item.children || item.children.length === 0) {
                return (
                  <NavLink key={item.to || item.label} to={item.to || "#"} end={item.to === "/pharma"} className={({ isActive }) => cn(rowClasses, isActive && "bg-accent text-accent-foreground")} title={collapsed ? item.label : undefined}>
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.label}</span>}
                  </NavLink>
                );
              }

              if (collapsed) {
                return (
                  <DropdownMenu key={key}>
                    <DropdownMenuTrigger asChild>
                      <button className={rowClasses} title={item.label}>
                        <item.icon className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.children.map((c) => (
                        <DropdownMenuItem key={c.label} asChild>
                          <Link to={c.to}>{c.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <div key={key} className="flex flex-col">
                  <button className={rowClasses} onClick={() => toggleGroup(key)}>
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span className="flex-1 text-left">{item.label}</span>}
                    {!collapsed && <ChevronDown className={cn("h-4 w-4 transition-transform", open ? "rotate-180" : "rotate-0")} />}
                  </button>
                  {open && (
                    <div className="mt-1 flex flex-col gap-1 pl-8">
                      {item.children.map((c) => (
                        <NavLink key={c.label} to={c.to} end className={({ isActive }) => cn("rounded px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground", isActive && "bg-accent text-accent-foreground")}>
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="p-2">
            <Separator className="mb-2" />
            <Link
              to="/pharma/settings"
              className={cn("flex items-center gap-3 rounded px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground", location.pathname.startsWith("/pharma/settings") && "bg-accent text-accent-foreground", collapsed && "justify-center")}
              title={collapsed ? "Settings" : undefined}
            >
              <Settings className="h-4 w-4" />
              {!collapsed && <span>Settings</span>}
            </Link>
          </div>
        </aside>

        {/* Main area */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Top toolbar */}
          <header className="flex h-14 items-center justify-between gap-2 border-b bg-background/70 backdrop-blur px-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Pharma Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <UserProfileDropdown user={user} />
            </div>
          </header>

          {/* Content */}
          <main className="min-w-0 flex-1 overflow-auto p-4">{children ? children : <Outlet />}</main>
        </div>
      </div>
    </div>
  );
}
