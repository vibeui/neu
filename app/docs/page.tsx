import { ComponentShowcase } from "@/components/component-showcase"
import { DocsHeader } from "@/components/docs-header"
import { InstallationGuide } from "@/components/installation-guide"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <DocsHeader />
      <main className="container py-10 space-y-16">
        <section id="components" className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Components
          </h2>
          <ComponentShowcase />
        </section>
        <InstallationGuide />
      </main>
    </div>
  )
}
