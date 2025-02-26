import { NextResponse } from "next/server"
import _ from "lodash"

export async function POST(request: Request) {
  const { code } = await request.json()

  try {
    // Using Function constructor to create a function from the string
    // This is a security risk if the code is from an untrusted source
    const func = new Function("_", `${code} return result;`)
    const result = func(_)
    return NextResponse.json(result)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

