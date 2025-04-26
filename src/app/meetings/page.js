"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  PlusCircle,
  Search,
  Video,
  Users,
  Clock,
  CalendarIcon,
  Link2,
} from "lucide-react";

const meetings = [
  {
    id: 1,
    title: "Quarterly Financial Review",
    date: "2023-07-25",
    time: "10:00 AM - 11:30 AM",
    status: "upcoming",
    participants: [
      {
        name: "Alice Johnson",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238645_11475210.jpg-lU8bOe6TLt5Rv51hgjg8NT8PsDBmvN.jpeg",
      },
      {
        name: "Bob Smith",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238208_11475222.jpg-poEIzVHAGiIfMFQ7EiF8PUG1u0Zkzz.jpeg",
      },
      {
        name: "Charlie Brown",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd.jpg-4MCwPC2Bec6Ume26Yo1kao3CnONxDg.jpeg",
      },
    ],
    organizer: "Sarah Johnson",
    location: "Virtual (Zoom)",
  },
  {
    id: 2,
    title: "Product Development Sync",
    date: "2023-07-26",
    time: "2:00 PM - 3:00 PM",
    status: "upcoming",
    participants: [
      {
        name: "Diana Martinez",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9334178.jpg-Y74tW6XFO68g7N36SE5MSNDNVKLQ08.jpeg",
      },
      {
        name: "Ethan Williams",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5295.jpg-fLw0wGGZp8wuTzU5dnyfjZDwAHN98a.jpeg",
      },
    ],
    organizer: "Michael Chen",
    location: "Conference Room A",
  },
  {
    id: 3,
    title: "Marketing Campaign Planning",
    date: "2023-07-27",
    time: "11:00 AM - 12:30 PM",
    status: "upcoming",
    participants: [
      {
        name: "Fiona Garcia",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9720029.jpg-Yf9h2a3kT7rYyCb648iLIeHThq5wEy.jpeg",
      },
      {
        name: "George Lee",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27470341_7294795.jpg-XE0zf7R8tk4rfA1vm4fAHeZ1QoVEOo.jpeg",
      },
    ],
    organizer: "Jessica Taylor",
    location: "Virtual (Teams)",
  },
  {
    id: 4,
    title: "Client Presentation: XYZ Corp",
    date: "2023-07-28",
    time: "3:30 PM - 5:00 PM",
    status: "upcoming",
    participants: [
      {
        name: "Hannah Kim",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/799.jpg-0tEi4Xvg5YsFoGoQfQc698q4Dygl1S.jpeg",
      },
      {
        name: "Ian Foster",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9334228.jpg-eOsHCkvVrVAwcPHKYSs5sQwVKsqWpC.jpeg",
      },
    ],
    organizer: "David Wilson",
    location: "Board Room",
  },
  {
    id: 5,
    title: "Team Building Workshop",
    date: "2023-07-21",
    time: "1:00 PM - 4:00 PM",
    status: "completed",
    participants: [
      {
        name: "Alice Johnson",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238645_11475210.jpg-lU8bOe6TLt5Rv51hgjg8NT8PsDBmvN.jpeg",
      },
      {
        name: "Bob Smith",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238208_11475222.jpg-poEIzVHAGiIfMFQ7EiF8PUG1u0Zkzz.jpeg",
      },
      {
        name: "Charlie Brown",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd.jpg-4MCwPC2Bec6Ume26Yo1kao3CnONxDg.jpeg",
      },
      {
        name: "Diana Martinez",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9334178.jpg-Y74tW6XFO68g7N36SE5MSNDNVKLQ08.jpeg",
      },
    ],
    organizer: "Emily Rodriguez",
    location: "Conference Center",
  },
];

const statusColors = {
  upcoming: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "in-progress":
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  completed:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function MeetingsPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="space-y-6 p-8 max-sm:p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Schedule Meeting
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today&apos;s Meetings
            </CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 upcoming, 1 completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              8 upcoming, 4 completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Virtual Meetings
            </CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Zoom, Teams, Google Meet
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Across all meetings</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder="Search meetings..."
                className="pl-10 mb-4"
              />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Meeting</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Participants</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {meetings
                  .filter((meeting) => meeting.status === "upcoming")
                  .map((meeting) => (
                    <TableRow key={meeting.id}>
                      <TableCell className="font-medium">
                        {meeting.title}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span>{meeting.date}</span>
                          <span className="text-xs text-muted-foreground">
                            {meeting.time}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex -space-x-2">
                          {meeting.participants.map((participant, index) => (
                            <Avatar
                              key={index}
                              className="h-8 w-8 border-2 border-background"
                            >
                              <AvatarImage
                                src={participant.avatar}
                                alt={participant.name}
                              />
                              <AvatarFallback>
                                {participant.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {meeting.participants.length > 3 && (
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium">
                              +{meeting.participants.length - 3}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{meeting.location}</TableCell>
                      <TableCell>
                        <Badge className={statusColors[meeting.status]}>
                          {meeting.status.charAt(0).toUpperCase() +
                            meeting.status.slice(1)}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">View All</Button>
            <Button variant="outline">
              <Clock className="mr-2 h-4 w-4" />
              Past Meetings
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />

            <div className="mt-4">
              <h3 className="font-medium mb-2">
                Meetings on {date?.toLocaleDateString()}
              </h3>
              {meetings.filter(
                (meeting) => meeting.date === date?.toISOString().split("T")[0]
              ).length > 0 ? (
                <div className="space-y-2">
                  {meetings
                    .filter(
                      (meeting) =>
                        meeting.date === date?.toISOString().split("T")[0]
                    )
                    .map((meeting) => (
                      <div key={meeting.id} className="p-2 rounded-md bg-muted">
                        <div className="font-medium">{meeting.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {meeting.time}
                        </div>
                        <div className="flex items-center mt-1">
                          <Video className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span className="text-xs">{meeting.location}</span>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-4">
                  No meetings scheduled for this day
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Meeting
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="recurring">Recurring</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {meetings
                  .filter((meeting) => meeting.status === "upcoming")
                  .map((meeting) => (
                    <Card key={meeting.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          {meeting.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{meeting.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>
                              {meeting.participants.length} participants
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Link2 className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{meeting.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Join Meeting
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recurring">
          <Card>
            <CardHeader>
              <CardTitle>Recurring Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                Recurring meetings would be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle>Past Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                Past meetings would be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
