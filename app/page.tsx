"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Input} from "@/components/ui/input"
import {Switch} from "@/components/ui/switch"
import {Progress} from "@/components/ui/progress"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-neumorphic-bg">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"/>

                {/* Header */}
                <header className="relative z-10 px-6 py-8">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-10 h-10 rounded-xl bg-neumorphic-surface shadow-neumorphic-raised flex items-center justify-center">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent"/>
                            </div>
                            <h1 className="text-2xl font-bold text-neumorphic-text font-sans">@vibeui/neu</h1>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#components"
                               className="text-neumorphic-text-muted hover:text-neumorphic-text transition-colors">
                                Components
                            </a>
                            <a href="/docs"
                               className="text-neumorphic-text-muted hover:text-neumorphic-text transition-colors">
                                Documentation
                            </a>
                            <Button variant="outline" size="sm" className="shadow-neumorphic-flat bg-transparent">
                                GitHub
                            </Button>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative z-10 px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="shadow-neumorphic-flat">
                                ✨ Soft UI Components
                            </Badge>
                            <h2 className="text-5xl md:text-7xl font-bold text-neumorphic-text font-sans leading-tight">
                                Beautiful{" "}
                                <span
                                    className="bg-gradient-to-r from-neumorphic-primary to-neumorphic-text-secondary bg-clip-text text-transparent">
                  Neumorphic
                </span>{" "}
                                Design
                            </h2>
                            <p className="text-xl text-neumorphic-text-muted max-w-2xl mx-auto leading-relaxed">
                                Craft interfaces that feel tangible and alive. A complete component library built with
                                the soft, tactile
                                aesthetic of neumorphism.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="shadow-neumorphic-accent-raised hover:shadow-neumorphic-accent-pressed transition-all duration-300"
                            >
                                Get Started
                            </Button>
                            <Button variant="outline" size="lg" className="shadow-neumorphic-flat bg-transparent">
                                View Components
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

            <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <h3 className="text-3xl font-bold text-neumorphic-text font-sans">Tactile Components</h3>
                        <p className="text-neumorphic-text-muted max-w-2xl mx-auto">
                            Every component is crafted with attention to depth, shadow, and interaction. Experience the
                            soft,
                            pressed-in aesthetic that makes interfaces feel real.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Interactive Card */}
                        <Card
                            className="shadow-neumorphic-raised hover:shadow-neumorphic-pressed transition-all duration-300 cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <Avatar className="shadow-neumorphic-flat">
                                        <AvatarImage src="/diverse-user-avatars.png"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-lg">Interactive Cards</CardTitle>
                                        <CardDescription>Hover to feel the depth</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <Progress value={75} className="shadow-neumorphic-inset"/>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-neumorphic-text-muted">Progress</span>
                                        <Badge variant="secondary" className="shadow-neumorphic-flat">
                                            75%
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Form Elements */}
                        <Card className="shadow-neumorphic-raised">
                            <CardHeader>
                                <CardTitle className="text-lg">Form Controls</CardTitle>
                                <CardDescription>Soft, tactile inputs</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Input
                                    placeholder="Enter your email"
                                    className="shadow-neumorphic-inset focus:shadow-neumorphic-pressed transition-all duration-200"
                                />
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-neumorphic-text">Notifications</span>
                                    <Switch className="shadow-neumorphic-flat"/>
                                </div>
                                <Button
                                    className="w-full shadow-neumorphic-flat hover:shadow-neumorphic-pressed transition-all duration-200">
                                    Subscribe
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Feature Highlight */}
                        <Card className="shadow-neumorphic-raised md:col-span-2 lg:col-span-1">
                            <CardHeader>
                                <CardTitle className="text-lg">Depth & Shadow</CardTitle>
                                <CardDescription>The magic of neumorphism</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="aspect-square rounded-xl bg-neumorphic-surface shadow-neumorphic-raised flex items-center justify-center">
                                        <span className="text-2xl">🌟</span>
                                    </div>
                                    <div
                                        className="aspect-square rounded-xl bg-neumorphic-surface shadow-neumorphic-pressed flex items-center justify-center">
                                        <span className="text-2xl">✨</span>
                                    </div>
                                </div>
                                <p className="text-sm text-neumorphic-text-muted mt-4">
                                    Raised and pressed states create natural interaction feedback
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <footer className="px-6 py-12 border-t border-neumorphic-border">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div
                            className="w-8 h-8 rounded-lg bg-neumorphic-surface shadow-neumorphic-raised flex items-center justify-center">
                            <div className="w-4 h-4 rounded bg-gradient-to-br from-primary to-accent"/>
                        </div>
                        <span className="text-lg font-semibold text-neumorphic-text font-sans">@vibeui/neu</span>
                    </div>
                    <p className="text-neumorphic-text-muted">
                        Crafted with care for developers who appreciate beautiful, tactile interfaces.
                    </p>
                </div>
            </footer>
        </div>
    )
}
