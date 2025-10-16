"use client"
import { Button, HeadBar } from "@/components";
import { ShowCaseInputCard } from "@/components/showcase-input-card";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@/components/ui/modal";
import { ComponentEnum, trackEventReq } from "@/utils/types/trackEvent";
import { useState } from "react";

export default function ShowcaseModalPage() {
    const [openSmallModal, setOpenSmallModal] = useState(false)
    const [openBaseModal, setOpenBaseModal] = useState(false)
    const [openLargeModal, setOpenLargeModal] = useState(false)
    const [openHeaderModal, setOpenHeaderModal] = useState(false)
    const [openBodyModal, setOpenBodyModal] = useState(false)
    const [openFooterModal, setOpenFooterModal] = useState(false)

    type ModalSize = "sm" | "md" | "lg";
    const modalsOptions: {
        name: string;
        variant: ModalSize;
        title: string;
        description: string;
        open: boolean;
        handle: (open: boolean) => void;
    }[] = [
            { name: "small", variant: "sm", title: "Small Modal", description: "This is the small modal", open: openSmallModal, handle: (open: boolean) => setOpenSmallModal(open) },
            { name: "medium", variant: "md", title: "Medium Modal", description: "This is a medium modal", open: openBaseModal, handle: (open: boolean) => setOpenBaseModal(open) },
            { name: "large", variant: "lg", title: "Large Modal", description: "This is a large modal", open: openLargeModal, handle: (open: boolean) => setOpenLargeModal(open) }
        ];

    const registerTrack = async (variant: string, action: string) => {
        const trackData: trackEventReq = {
            component: ComponentEnum.modal,
            variant: variant,
            action: action
        }
        console.log("track:", trackData)
        // await trackEvent(trackData)
    }

    return (
        <div className="w-full h-full md:h-screen bg-background">
            <HeadBar title="Modals" />
            <div className="flex flex-col items-center">
                <section className="flex flex-col p-4 gap-2">
                    <h2 className="title-text text-4xl!">Variants</h2>
                    <h3 className="subtitle-text">The different variants of buttons</h3>
                    <div className="grid grid-cols-1 gap-2 p-4">
                        {modalsOptions.map((v) => (
                            <ShowCaseInputCard key={v.name} title={v.title} description={v.description}
                                registerTrack={(action) => registerTrack(v.name, action)}
                            >
                                <div>
                                    <Button onClick={() => {
                                        v.handle(!v.open)
                                        registerTrack(v.name,"click")
                                    }}
                                    >{`Open ${v.title}`}</Button>
                                    <Modal size={v.variant} open={v.open} setOpen={() => v.handle(!v.open)}>
                                        <ModalHeader>
                                            {v.title}
                                        </ModalHeader>
                                        <ModalBody>{v.description}</ModalBody>
                                        <ModalFooter>
                                            <Button variant={"danger"} onClick={() => v.handle(!v.open)}>{`Close ${v.title}`}</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </ShowCaseInputCard>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col p-4 gap-2">
                    <h2 className="title-text text-4xl!">Modal options</h2>
                    <div className="grid grid-cols-1 gap-2 p-4">
                        <ShowCaseInputCard title={"Modal Header"} description={"This is an example of a modal with only Modal Header"}
                            registerTrack={(action) => registerTrack("headerModal", action)}
                        >
                            <div>
                                <Button onClick={() => {
                                    setOpenHeaderModal(true)
                                    registerTrack("headerModal", "click")
                                }}
                                >{`Open Modal Header`}</Button>
                                <Modal open={openHeaderModal} setOpen={() => setOpenHeaderModal(false)}>
                                    <ModalHeader>
                                        {"Modal Header"}
                                    </ModalHeader>
                                </Modal>
                            </div>
                        </ShowCaseInputCard>
                        <ShowCaseInputCard title={"Modal Body"} description={"This is an example of a modal with only Modal Body"}
                            registerTrack={(action) => registerTrack("bodyModal", action)}
                        >
                            <div>
                                <Button onClick={() => {
                                    setOpenBodyModal(!openBodyModal)
                                    registerTrack("bodyModal", "click")
                                }}
                                >{`Open Modal Body`}</Button>
                                <Modal open={openBodyModal} setOpen={() => setOpenBodyModal(!openBodyModal)}>
                                    <ModalBody>{"This is modal body"}</ModalBody>
                                </Modal>
                            </div>
                        </ShowCaseInputCard>
                        <ShowCaseInputCard title={"Modal Footer"} description={"This is an example of a modal with only Modal Footer"}
                            registerTrack={(action) => registerTrack("footerModal", action)}
                        >
                            <div>
                                <Button onClick={() => {
                                    setOpenFooterModal(!openFooterModal)
                                    registerTrack("footerModal", "click")
                                }}
                                >{`Open Modal Footer`}</Button>
                                <Modal open={openFooterModal} setOpen={() => setOpenFooterModal(!openFooterModal)}>
                                    <ModalFooter>
                                        <Button variant={"danger"} onClick={() => setOpenFooterModal(!openFooterModal)}>{`Close Modal Footer`}</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </ShowCaseInputCard>
                    </div>
                </section>
            </div>
        </div>
    );
}
