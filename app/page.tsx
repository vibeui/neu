"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              @vibeui/neu
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A modern neumorphic component library built with React and Tailwind CSS.
          </p>

          <div className="space-y-8">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Test Card</CardTitle>
                <CardDescription>Testing neumorphic styling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="default">Default Button</Button>
                  <Button variant="primary">Primary Button</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
