"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

type User = {
  id: string
  name: string
  role: string
  online: boolean
  avatar?: string
}

const mockUsers: User[] = [
  { id: "1", name: "John Doe", role: "Teacher", online: true },
  { id: "2", name: "Jane Smith", role: "Student", online: false },
  { id: "3", name: "Tech Institute", role: "Institute", online: true },
]

export function UserList() {
  const [users] = useState<User[]>(mockUsers)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center space-x-4 p-2 hover:bg-accent rounded-lg cursor-pointer">
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-muted-foreground">{user.role}</div>
            </div>
            <Badge variant={user.online ? "default" : "secondary"}>{user.online ? "Online" : "Offline"}</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}

