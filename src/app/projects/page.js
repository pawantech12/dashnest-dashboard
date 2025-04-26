import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlusCircle, Folder, Clock, Users, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Mobile Banking App Redesign",
    description:
      "Redesign of the mobile banking application with improved UX and new features",
    status: "In Progress",
    progress: 65,
    team: 8,
    deadline: "Aug 15, 2023",
    tasks: { completed: 24, total: 36 },
  },
  {
    id: 2,
    name: "Financial Dashboard 2.0",
    description:
      "Enhanced version of the financial dashboard with advanced analytics",
    status: "Planning",
    progress: 20,
    team: 5,
    deadline: "Sep 30, 2023",
    tasks: { completed: 8, total: 42 },
  },
  {
    id: 3,
    name: "Payment Gateway Integration",
    description:
      "Integration with multiple payment gateways for seamless transactions",
    status: "Completed",
    progress: 100,
    team: 4,
    deadline: "Jul 10, 2023",
    tasks: { completed: 28, total: 28 },
  },
  {
    id: 4,
    name: "Customer Support Portal",
    description:
      "Self-service portal for customers to manage their accounts and get support",
    status: "In Progress",
    progress: 45,
    team: 6,
    deadline: "Oct 5, 2023",
    tasks: { completed: 15, total: 32 },
  },
];

const statusColors = {
  "In Progress":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Planning:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Completed:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "On Hold": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6 p-8 max-sm:p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold">
                      {project.name}
                    </CardTitle>
                    <Badge className={statusColors[project.status]}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{project.team} members</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{project.deadline}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>
                        {project.tasks.completed}/{project.tasks.total} tasks
                        completed
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="flex flex-col items-center justify-center p-6 border-dashed">
              <Folder className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Create New Project</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Start a new project and assign team members
              </p>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                Active projects would be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                Completed projects would be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived">
          <Card>
            <CardHeader>
              <CardTitle>Archived Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                Archived projects would be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
