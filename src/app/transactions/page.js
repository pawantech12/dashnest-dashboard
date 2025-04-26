import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  Search,
  RefreshCw,
} from "lucide-react";

const transactions = [
  {
    id: "TX-1234",
    date: "2023-07-20",
    description: "Salary Deposit",
    amount: 5000,
    type: "credit",
    status: "completed",
    account: "Checking Account",
    category: "Income",
  },
  {
    id: "TX-1235",
    date: "2023-07-19",
    description: "Amazon.com",
    amount: 129.99,
    type: "debit",
    status: "completed",
    account: "Credit Card",
    category: "Shopping",
  },
  {
    id: "TX-1236",
    date: "2023-07-18",
    description: "Grocery Store",
    amount: 85.75,
    type: "debit",
    status: "completed",
    account: "Checking Account",
    category: "Groceries",
  },
  {
    id: "TX-1237",
    date: "2023-07-17",
    description: "Gas Station",
    amount: 45.5,
    type: "debit",
    status: "completed",
    account: "Credit Card",
    category: "Transportation",
  },
  {
    id: "TX-1238",
    date: "2023-07-16",
    description: "Transfer to Savings",
    amount: 1000,
    type: "transfer",
    status: "completed",
    account: "Checking Account",
    category: "Transfer",
  },
  {
    id: "TX-1239",
    date: "2023-07-15",
    description: "Utility Bill",
    amount: 120.3,
    type: "debit",
    status: "pending",
    account: "Checking Account",
    category: "Utilities",
  },
  {
    id: "TX-1240",
    date: "2023-07-14",
    description: "Freelance Payment",
    amount: 750,
    type: "credit",
    status: "completed",
    account: "Savings Account",
    category: "Income",
  },
];

const statusColors = {
  completed:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  pending:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  failed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function TransactionsPage() {
  return (
    <div className="space-y-6 p-8 max-sm:p-5">
      <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transactions..."
              className="w-full sm:w-[300px] pl-8"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>

          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto max-md:w-[800px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">
                      {transaction.id}
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>{transaction.account}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[transaction.status]}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end">
                        <span
                          className={
                            transaction.type === "credit"
                              ? "text-green-600 dark:text-green-400"
                              : transaction.type === "debit"
                              ? "text-red-600 dark:text-red-400"
                              : "text-blue-600 dark:text-blue-400"
                          }
                        >
                          {transaction.type === "credit"
                            ? "+"
                            : transaction.type === "debit"
                            ? "-"
                            : ""}
                          ${transaction.amount.toFixed(2)}
                        </span>
                        {transaction.type === "credit" ? (
                          <ArrowUpRight className="ml-1 h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : transaction.type === "debit" ? (
                          <ArrowDownRight className="ml-1 h-4 w-4 text-red-600 dark:text-red-400" />
                        ) : null}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>1-7</strong> of <strong>120</strong>{" "}
                transactions
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
