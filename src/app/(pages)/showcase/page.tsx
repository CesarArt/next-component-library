import Link from "next/link";

export default function ShowcasePage() {
    return (
        <div className="container mx-auto px-2 w-full h-screen bg-background">
            <div className="flex flex-col">
                <h2 className="text-6xl">Components</h2>
                <Link href={"/showcase/buttons"} className="text-2xl">Buttons</Link>
                <Link href={"/showcase/inputs"} className="text-2xl">Inputs</Link>
                <Link href={"/showcase/cards"} className="text-2xl">Cards</Link>
                <Link href={"/showcase/modal"} className="text-2xl">Modals</Link>
            </div>
        </div>
    );
}
