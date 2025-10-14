import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CircleX } from "lucide-react";

interface ModalHeaderProps {
   children?: React.ReactNode
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
    return (
        <DialogTitle as="h3" className="text-xl font-bold text-gray-900 dark:text-white px-4">
            {children}
        </DialogTitle>
    );
}

const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("text-sm/6 font-normal text-gray-700 dark:text-gray-400 px-4 pb-2", className)}
            {...props}
        />
    )
}

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("bg-slate-200 p-2 rounded-b-xl", className)}
            {...props}
        />
    )
}

const ModalVariants = cva(
    "w-full rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(94%)] data-closed:opacity-0",
    {
        variants: {
            size: {
                sm:
                    "max-w-xs w-fit",
                md:
                    "max-w-md w-70 md:w-full",
                lg:
                    "max-w-xl w-full",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
)

interface ModalProps extends VariantProps<typeof ModalVariants> {
    open: boolean
    setOpen: () => void
    children?: React.ReactNode
    className?: string
}
const Modal = ({ open, setOpen, className, size, children }: ModalProps) => {
    return (
        <Dialog open={open} as="div" onClose={setOpen} className="relative z-10 focus:outline-none"
        >
            <div className="fixed inset-0 bg-gray-500/75 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-2">
                    <DialogPanel
                        transition
                        className={cn(ModalVariants({ size, className }))}
                    >
                        <div className="flex w-full justify-end pt-2 pr-2">
                            <CircleX onClick={setOpen} size={18} className="btn-hover cursor-pointer"/>
                        </div>
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
export { Modal, ModalHeader, ModalFooter, ModalBody }
