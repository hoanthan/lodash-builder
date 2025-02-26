"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/ui/code-block"
import { Combobox } from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import _ from 'lodash'

const lodashFunctions = Object.keys(_).filter(fnName => !['_', 'VERSION'].includes(fnName)).map((fnName) => ({
  value: fnName,
  label: fnName
}))

export default function LodashBuilder() {
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([])
  const [functionInputs, setFunctionInputs] = useState<{ [key: string]: string }>({})
  const [output, setOutput] = useState("")

  const addFunction = (func: string) => {
    if (!selectedFunctions.includes(func)) {
      setSelectedFunctions((prev) => [...prev, func])
      setFunctionInputs((prev) => ({ ...prev, [func]: "" }))
    }
  }

  const removeFunction = (func: string) => {
    setSelectedFunctions((prev) => prev.filter((f) => f !== func))
    setFunctionInputs((prev) => {
      const newInputs = { ...prev }
      delete newInputs[func]
      return newInputs
    })
  }

  const updateFunctionInput = (func: string, input: string) => {
    setFunctionInputs((prev) => ({ ...prev, [func]: input }))
  }

  const generateCode = () => {
    const code = selectedFunctions.map((func) => `_.${func}(${functionInputs[func] || ""})`).join(".")
    return `const result = ${code};`
  }

  const executeCode = async () => {
    const code = generateCode()
    try {
      const response = await fetch("/api/lodash-execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
      const result = await response.json()
      setOutput(JSON.stringify(result, null, 2))
    } catch {
      setOutput(JSON.stringify({ error: "An error occurred while executing the code." }, null, 2))
    }
  }

  return (
    <div id="builder" className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Lodash Builder</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Select Lodash Functions</CardTitle>
          </CardHeader>
          <CardContent>
            <Combobox options={lodashFunctions} onSelect={addFunction} placeholder="Select a function" />
            <div className="mt-4 space-y-2">
              {selectedFunctions.map((func) => (
                <div key={func} className="flex items-center space-x-2">
                  <Badge variant="secondary">{func}</Badge>
                  <Input
                    placeholder={`${func} arguments`}
                    value={functionInputs[func] || ""}
                    onChange={(e) => updateFunctionInput(func, e.target.value)}
                    className="flex-grow"
                  />
                  <Button variant="outline" size="icon" onClick={() => removeFunction(func)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button onClick={executeCode} className="mt-6">
              Execute Chain
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Output</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code={output || 'Select functions, provide inputs, and click "Execute Chain"'} language="json" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

