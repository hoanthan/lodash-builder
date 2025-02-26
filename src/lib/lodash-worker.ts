import _ from "lodash"

self.addEventListener("message", (event) => {
  const code = event.data
  try {
    // Using Function constructor to create a function from the string
    // This is a security risk if the code is from an untrusted source
    const func = new Function("_", `return (${code})`)
    const result = func(_)
    self.postMessage(result)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    self.postMessage({ error: error.message })
  }
})

