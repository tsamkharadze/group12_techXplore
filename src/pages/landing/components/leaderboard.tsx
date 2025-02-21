import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const topDrivers = [
  { name: "Giorgi M.", points: 2850, rank: 1 },
  { name: "Nino K.", points: 2720, rank: 2 },
  { name: "David T.", points: 2680, rank: 3 },
  { name: "Ana B.", points: 2590, rank: 4 },
  { name: "Luka G.", points: 2510, rank: 5 },
];

export function Leaderboard() {
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-2xl mx-auto mt-20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {t("landing-translation.leaderboard")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">{t("points")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topDrivers.map((driver) => (
              <TableRow key={driver.name}>
                <TableCell className="font-medium">{driver.rank}</TableCell>
                <TableCell>{driver.name}</TableCell>
                <TableCell className="text-right">{driver.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
