import { Card, CardBody, CardFooter, CardHeader, CardMedia, HeadBar } from "@/components";
import image from "@/assets/images/star-trails.jpg"

export default function ShowcaseCardsPage() {
    return (
        <div className="w-full h-full md:h-screen bg-background">
            <HeadBar title="Cards" />

            <div className="grid grid-cols-1 gap-4 p-4">
                <Card >
                    <CardHeader>Card Default</CardHeader>
                    <CardBody>Esto es un texto del body</CardBody>
                    <CardFooter>Esto es un footer del card</CardFooter>
                </Card>
                <Card variant={"solid"}>
                    <CardHeader>Card Solid</CardHeader>
                    <CardBody>Esto es un texto del body</CardBody>
                    <CardFooter>Esto es un footer del card</CardFooter>
                </Card>
                <Card variant={"dashed"}>
                    <CardHeader>Card Dashed</CardHeader>
                    <CardBody>Esto es un texto del body</CardBody>
                    <CardFooter>Esto es un footer del card</CardFooter>
                </Card>
                <Card variant={"dotted"}>
                    <CardHeader>Card Dotted</CardHeader>
                    <CardBody>Esto es un texto del body</CardBody>
                    <CardFooter>Esto es un footer del card</CardFooter>
                </Card>
                <Card variant={"double"}>
                    <CardHeader>Card Double</CardHeader>
                    <CardBody>Esto es un texto del body</CardBody>
                    <CardFooter>Esto es un footer del card</CardFooter>
                </Card>
                <Card>
                    <CardMedia src={image} alt="Iamge" />
                    <CardHeader>Card Image</CardHeader>
                    <CardBody>Esto es un texto del body</CardBody>
                    <CardFooter>Esto es un footer del card</CardFooter>
                </Card>
            </div>
        </div>
    );
}
