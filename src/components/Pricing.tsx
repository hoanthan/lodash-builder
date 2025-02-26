import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Hobby",
    price: "Free",
    features: ["Basic Lodash builder", "5 custom builds per month", "Community support"],
  },
  {
    name: "Pro",
    price: "$19/month",
    features: ["Advanced Lodash builder", "Unlimited custom builds", "Priority support", "API access"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Everything in Pro", "Dedicated support", "Custom integrations", "On-premise deployment"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{plan.price}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

