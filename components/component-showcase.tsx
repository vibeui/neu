import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ComponentShowcase() {
  return (
    <div className="grid gap-8">
      {/* Form Components */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Form Components</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>Neumorphic button variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
              <CardDescription>Text input with neumorphic styling</CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter text..." />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Switch</CardTitle>
              <CardDescription>Toggle switch with authentic neumorphic design</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="switch-1" />
                <Label htmlFor="switch-1">Enable notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="switch-2" defaultChecked />
                <Label htmlFor="switch-2">Auto-save</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Checkbox</CardTitle>
              <CardDescription>Checkbox with neumorphic styling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-1" />
                <Label htmlFor="checkbox-1">Accept terms</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-2" defaultChecked />
                <Label htmlFor="checkbox-2">Subscribe to newsletter</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
              <CardDescription>Radio buttons with neumorphic design</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="option-1" />
                  <Label htmlFor="option-1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="option-2" />
                  <Label htmlFor="option-2">Option 2</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Slider</CardTitle>
              <CardDescription>Range slider with neumorphic styling</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider defaultValue={[50]} max={100} step={1} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Display Components */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Display Components</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Badge</CardTitle>
              <CardDescription>Status badges with neumorphic design</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>Progress bar with neumorphic styling</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={65} className="w-full" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avatar</CardTitle>
              <CardDescription>User avatar with neumorphic frame</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/abstract-geometric-shapes.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
