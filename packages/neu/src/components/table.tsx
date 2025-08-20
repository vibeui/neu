"use client"

import * as React from "react"

import {cn} from "@/packages/neu/src/lib/utils"

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
    ({className, ...props}, ref) => (
        <div className="relative w-full overflow-auto">
            <table
                ref={ref}
                className={cn(
                    "w-full caption-bottom text-sm bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset rounded-xl overflow-hidden",
                    className,
                )}
                {...props}
            />
        </div>
    ),
)
Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({className, ...props}, ref) => (
        <thead ref={ref}
               className={cn("bg-neumorphic-bg/50 border-b border-neumorphic-border", className)} {...props} />
    ),
)
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({className, ...props}, ref) => (
        <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
    ),
)
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({className, ...props}, ref) => (
        <tfoot
            ref={ref}
            className={cn(
                "border-t border-neumorphic-border bg-neumorphic-bg/50 font-medium [&>tr]:last:border-b-0",
                className,
            )}
            {...props}
        />
    ),
)
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
    ({className, ...props}, ref) => (
        <tr
            ref={ref}
            className={cn(
                "border-b border-neumorphic-border transition-colors hover:bg-neumorphic-bg/50 data-[state=selected]:bg-neumorphic-primary/10",
                className,
            )}
            {...props}
        />
    ),
)
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
    ({className, ...props}, ref) => (
        <th
            ref={ref}
            className={cn(
                "h-12 px-4 text-left align-middle font-medium text-neumorphic-text [&:has([role=checkbox])]:pr-0",
                className,
            )}
            {...props}
        />
    ),
)
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
    ({className, ...props}, ref) => (
        <td
            ref={ref}
            className={cn("p-4 align-middle text-neumorphic-text-secondary [&:has([role=checkbox])]:pr-0", className)}
            {...props}
        />
    ),
)
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
    ({className, ...props}, ref) => (
        <caption ref={ref} className={cn("mt-4 text-sm text-neumorphic-text-secondary", className)} {...props} />
    ),
)
TableCaption.displayName = "TableCaption"

export {Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption}
