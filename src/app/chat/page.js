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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  PlusCircle,
  Search,
  Send,
  Paperclip,
  Smile,
  MoreHorizontal,
  Phone,
  Video,
} from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238645_11475210.jpg-lU8bOe6TLt5Rv51hgjg8NT8PsDBmvN.jpeg",
    status: "online",
    lastMessage: "Can you review the latest financial report?",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238208_11475222.jpg-poEIzVHAGiIfMFQ7EiF8PUG1u0Zkzz.jpeg",
    status: "offline",
    lastMessage: "Thanks for the update!",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd.jpg-4MCwPC2Bec6Ume26Yo1kao3CnONxDg.jpeg",
    status: "online",
    lastMessage: "Meeting scheduled for tomorrow at 2 PM",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 4,
    name: "Diana Martinez",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9334178.jpg-Y74tW6XFO68g7N36SE5MSNDNVKLQ08.jpeg",
    status: "away",
    lastMessage: "Please send me the project files when you get a chance",
    time: "Monday",
    unread: 0,
  },
  {
    id: 5,
    name: "Ethan Williams",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5295.jpg-fLw0wGGZp8wuTzU5dnyfjZDwAHN98a.jpeg",
    status: "online",
    lastMessage: "Great job on the presentation!",
    time: "Monday",
    unread: 0,
  },
];

const messages = [
  {
    id: 1,
    sender: "Alice Johnson",
    content: "Hi there! How's the financial report coming along?",
    time: "10:15 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    content:
      "Hey Alice! I'm almost done with it. Just finalizing some numbers.",
    time: "10:17 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Alice Johnson",
    content: "Great! When do you think you'll be able to share it?",
    time: "10:18 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "Me",
    content:
      "I should be able to send it over by end of day. There are a few discrepancies I need to resolve first.",
    time: "10:20 AM",
    isMe: true,
  },
  {
    id: 5,
    sender: "Alice Johnson",
    content:
      "That works. The board meeting is tomorrow afternoon, so that gives us time to review it.",
    time: "10:22 AM",
    isMe: false,
  },
  {
    id: 6,
    sender: "Alice Johnson",
    content:
      "Can you also include the quarterly comparison charts we discussed?",
    time: "10:25 AM",
    isMe: false,
  },
  {
    id: 7,
    sender: "Me",
    content:
      "Yes, I've prepared those charts. They show a positive trend in our Q3 performance.",
    time: "10:28 AM",
    isMe: true,
  },
  {
    id: 8,
    sender: "Alice Johnson",
    content:
      "Can you review the latest financial report? I've shared it with you via email as well.",
    time: "10:30 AM",
    isMe: false,
  },
];

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-500",
  away: "bg-yellow-500",
};

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messageInput, setMessageInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, you would send the message to the server
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="space-y-6 p-8 max-sm:p-5">
      <h1 className="text-3xl font-bold tracking-tight">Chat</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {(!isChatOpen || window.innerWidth >= 768) && (
          <Card className="md:col-span-1">
            <CardHeader className="px-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Conversations</CardTitle>
                <Button variant="ghost" size="icon">
                  <PlusCircle className="h-5 w-5" />
                </Button>
              </div>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search contacts..."
                  className="pl-8"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b bg-[#F5F5F5] p-0 ">
                  <TabsTrigger
                    value="all"
                    className="rounded-md cursor-pointer border-b-2 border-transparent px-4 py-2 data-[state=active]:border-gray-200 data-[state=active]:bg-white"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="unread"
                    className="rounded-md cursor-pointer border-b-2 border-transparent px-4 py-2 data-[state=active]:border-gray-200 data-[state=active]:bg-white"
                  >
                    Unread
                  </TabsTrigger>
                  <TabsTrigger
                    value="groups"
                    className="rounded-md cursor-pointer border-b-2 border-transparent px-4 py-2 data-[state=active]:border-gray-200 data-[state=active]:bg-white"
                  >
                    Groups
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="m-0">
                  <ScrollArea className="h-[calc(100vh-350px)]">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-muted transition-colors ${
                          selectedContact.id === contact.id ? "bg-muted" : ""
                        }`}
                        onClick={() => {
                          setSelectedContact(contact);
                          setIsChatOpen(true);
                        }}
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage
                              src={contact.avatar}
                              alt={contact.name}
                            />
                            <AvatarFallback>
                              {contact.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                              statusColors[contact.status]
                            }`}
                          ></span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium truncate">
                              {contact.name}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                              {contact.time}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {contact.lastMessage}
                          </p>
                        </div>
                        {contact.unread > 0 && (
                          <Badge className="ml-auto bg-primary">
                            {contact.unread}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="unread" className="m-0">
                  <div className="p-8 text-center text-muted-foreground">
                    Unread messages would appear here
                  </div>
                </TabsContent>
                <TabsContent value="groups" className="m-0">
                  <div className="p-8 text-center text-muted-foreground">
                    Group chats would appear here
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
        {(isChatOpen || window.innerWidth >= 768) && (
          <Card className="md:col-span-2 flex flex-col">
            <CardHeader className="px-6 py-4 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={selectedContact.avatar}
                      alt={selectedContact.name}
                    />
                    <AvatarFallback>
                      {selectedContact.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{selectedContact.name}</h3>
                    <div className="flex items-center">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          statusColors[selectedContact.status]
                        } mr-2`}
                      ></span>
                      <span className="text-xs text-muted-foreground capitalize">
                        {selectedContact.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-6 overflow-auto">
              <ScrollArea className="h-[calc(100vh-400px)]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isMe ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] ${
                          message.isMe ? "order-2" : "order-1"
                        }`}
                      >
                        {!message.isMe && (
                          <div className="flex items-center gap-2 mb-1">
                            <Avatar className="h-6 w-6">
                              <AvatarImage
                                src={selectedContact.avatar}
                                alt={selectedContact.name}
                              />
                              <AvatarFallback>
                                {selectedContact.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">
                              {message.sender}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {message.time}
                            </span>
                          </div>
                        )}
                        <div
                          className={`rounded-lg p-3 ${
                            message.isMe
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                        {message.isMe && (
                          <div className="flex justify-end mt-1">
                            <span className="text-xs text-muted-foreground">
                              {message.time}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="p-4 border-t">
              <div className="flex items-center gap-2 w-full">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
