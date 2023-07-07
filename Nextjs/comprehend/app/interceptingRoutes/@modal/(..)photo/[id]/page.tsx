import Link from "next/link"
import { ReactNode } from "react"

export default async function photoPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())

    const todo: Users[] = res.map((user: Users) => {
        return (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <Link href={`/@modal/(..)photo/${user.id}`}>Click user!</Link>
            </div>
        )
    })

    return (
        <>
            <h1>Todo List</h1>
            <div>{todo as ReactNode}</div>
        </>
    )

}