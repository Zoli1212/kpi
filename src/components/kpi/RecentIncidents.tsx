import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Badge from "@/components/ui/badge/Badge";

// Define the TypeScript interface for the table rows
interface Incident {
  id: number;
  title: string;
  system: string;
  priority: "Magas" | "Közepes" | "Alacsony";
  status: "Nyitott" | "Folyamatban" | "Megoldva";
  created: string;
}

// Define the table data using the interface
const tableData: Incident[] = [
  {
    id: 1,
    title: "Adatbázis kapcsolati hiba",
    system: "Elsődleges Adatbázis",
    priority: "Magas",
    status: "Folyamatban",
    created: "2023-05-05 14:30"
  },
  {
    id: 2,
    title: "API válasz késés",
    system: "Fizetési átjáró",
    priority: "Közepes",
    status: "Nyitott",
    created: "2023-05-05 12:15"
  },
  {
    id: 3,
    title: "Felhasználói felület megjelenítési hiba",
    system: "Előtérrendszer",
    priority: "Alacsony",
    status: "Nyitott",
    created: "2023-05-05 10:45"
  },
  {
    id: 4,
    title: "Email szolgáltatás leállt",
    system: "Értesítés",
    priority: "Magas",
    status: "Megoldva",
    created: "2023-05-04 16:20"
  },
  {
    id: 5,
    title: "Lassú lekérdezés teljesítmény",
    system: "Elemzés",
    priority: "Közepes",
    status: "Folyamatban",
    created: "2023-05-04 09:30"
  },
];

export default function RecentIncidents() {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Magas":
        return <Badge color="error">Magas</Badge>;
      case "Közepes":
        return <Badge color="warning">Közepes</Badge>;
      case "Alacsony":
        return <Badge color="success">Alacsony</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Nyitott":
        return <Badge color="error">Nyitott</Badge>;
      case "Folyamatban":
        return <Badge color="warning">Folyamatban</Badge>;
      case "Megoldva":
        return <Badge color="success">Megoldva</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Legutóbbi Incidensek
        </h3>
        <a
          href="/incidents"
          className="text-sm font-medium text-brand-500 hover:underline"
        >
Összes megtekintése
        </a>
      </div>

      <div className="mt-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                Cím
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                Rendszer
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                Prioritás
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                Állapot
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                Létrehozva
              </th>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((incident) => (
              <TableRow key={incident.id}>
                <TableCell className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200">
                  #{incident.id}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-white">
                  {incident.title}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200">
                  {incident.system}
                </TableCell>
                <TableCell className="px-4 py-3">
                  {getPriorityBadge(incident.priority)}
                </TableCell>
                <TableCell className="px-4 py-3">
                  {getStatusBadge(incident.status)}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {incident.created}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
