import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Simple placeholder dashboard home with a few KPI cards.
 */
export default function DashboardHome() {
  const stats = [
    { label: "Total Orders", value: "1,248" },
    { label: "Low Stock Items", value: "32" },
    { label: "Customers", value: "8,142" },
    { label: "Revenue (30d)", value: "$86,420" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label} className="">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{s.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
