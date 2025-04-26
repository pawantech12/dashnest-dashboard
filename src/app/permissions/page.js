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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Search,
  Filter,
  Shield,
  Users,
  FileText,
  Settings,
  Save,
} from "lucide-react";

const roles = [
  {
    id: 1,
    name: "Administrator",
    description: "Full access to all resources",
    members: 5,
    lastUpdated: "2023-07-10",
  },
  {
    id: 2,
    name: "Manager",
    description: "Access to manage teams and projects",
    members: 12,
    lastUpdated: "2023-06-25",
  },
  {
    id: 3,
    name: "Developer",
    description: "Access to code repositories and development tools",
    members: 45,
    lastUpdated: "2023-07-05",
  },
  {
    id: 4,
    name: "Analyst",
    description: "Access to analytics and reporting tools",
    members: 18,
    lastUpdated: "2023-07-12",
  },
  {
    id: 5,
    name: "Guest",
    description: "Limited read-only access",
    members: 32,
    lastUpdated: "2023-06-30",
  },
];

const permissions = [
  { id: "view_dashboard", name: "View Dashboard", category: "Dashboard" },
  { id: "edit_dashboard", name: "Edit Dashboard", category: "Dashboard" },
  { id: "create_project", name: "Create Project", category: "Projects" },
  { id: "edit_project", name: "Edit Project", category: "Projects" },
  { id: "delete_project", name: "Delete Project", category: "Projects" },
  { id: "view_reports", name: "View Reports", category: "Reports" },
  { id: "create_report", name: "Create Report", category: "Reports" },
  { id: "manage_users", name: "Manage Users", category: "Users" },
  { id: "view_users", name: "View Users", category: "Users" },
  { id: "manage_roles", name: "Manage Roles", category: "Roles" },
  { id: "view_roles", name: "View Roles", category: "Roles" },
  { id: "system_settings", name: "System Settings", category: "Settings" },
];

export default function PermissionsPage() {
  return (
    <div className="space-y-6 p-8 max-sm:p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Permissions</h1>
        <Button>
          <Shield className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Roles</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Administrator, Manager, etc.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Users Assigned
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">112</div>
            <p className="text-xs text-muted-foreground">Across all roles</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Permission Sets
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Grouped by category</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Today</div>
            <p className="text-xs text-muted-foreground">By Admin User</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="roles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="users">User Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="roles" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search roles..."
                  className="w-full sm:w-[300px] pl-8"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <Card>
              <CardContent className="pt-6 overflow-auto max-md:w-[800px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Members</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="font-medium">
                          {role.name}
                        </TableCell>
                        <TableCell>{role.description}</TableCell>
                        <TableCell>{role.members}</TableCell>
                        <TableCell>{role.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Permission Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Permission</TableHead>
                      <TableHead>Administrator</TableHead>
                      <TableHead>Manager</TableHead>
                      <TableHead>Developer</TableHead>
                      <TableHead>Analyst</TableHead>
                      <TableHead>Guest</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {permissions.map((permission) => (
                      <TableRow key={permission.id}>
                        <TableCell>
                          <div className="font-medium">{permission.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {permission.category}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Switch defaultChecked={true} />
                        </TableCell>
                        <TableCell>
                          <Switch
                            defaultChecked={
                              permission.category !== "Settings" &&
                              permission.id !== "delete_project" &&
                              permission.id !== "manage_roles"
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Switch
                            defaultChecked={
                              permission.category === "Projects" ||
                              permission.id === "view_dashboard" ||
                              permission.id === "view_reports"
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Switch
                            defaultChecked={
                              permission.category === "Reports" ||
                              permission.id === "view_dashboard"
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Switch
                            defaultChecked={permission.id === "view_dashboard"}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex justify-end mt-4">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Role Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                User role assignments would be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
