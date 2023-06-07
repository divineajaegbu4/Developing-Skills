import { NextResponse } from "next/server";
import { NewLineKind } from "typescript";

const Data_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET() {
  const res = await fetch(Data_SOURCE_URL);

  const todos: Todo[] = await res.json()

  return NextResponse.json(todos)
}



export async function DELETE(request: Request) {
  const {id}: Partial<Todo> = await request.json();

  if(!id) return NextResponse.json({"message": "Todo is required!"});

  await fetch(`${Data_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'API-KEY': API_KEY
    }
  });

  return NextResponse.json({"message": `Todo ${id} deleted`})

}