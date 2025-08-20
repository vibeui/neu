import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function InstallationGuide() {
  return (
    <section id="installation" className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Installation</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Get started with @vibeui/neu in your project</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Install Dependencies</CardTitle>
            <CardDescription>Install the required packages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
              <code className="text-green-400 text-sm">
                npm install @radix-ui/react-switch @radix-ui/react-checkbox @radix-ui/react-radio-group
              </code>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Copy Components</CardTitle>
            <CardDescription>Copy the component files to your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
              <code className="text-green-400 text-sm">npx @vibeui/neu add button input switch checkbox</code>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Add CSS Variables</CardTitle>
            <CardDescription>Add the neumorphic CSS variables to your globals.css</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                {`:root {
  --neumorphic-light: rgba(255, 255, 255, 0.8);
  --neumorphic-dark: rgba(0, 0, 0, 0.2);
  --neumorphic-inset-light: rgba(255, 255, 255, 0.6);
  --neumorphic-inset-dark: rgba(0, 0, 0, 0.3);
}`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
