import { MessageList } from "@/components/messages/message-list"
import { UserList } from "@/components/users/user-list"

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r">
        <UserList />
      </aside>
      <main className="flex-1">
        <MessageList />
      </main>
    </div>
  )
}

