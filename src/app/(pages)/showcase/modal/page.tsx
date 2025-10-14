"use client"
import { Button, HeadBar } from "@/components";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@/components/ui/modal";
import { useState } from "react";

export default function ShowcaseModalPage() {
    const [openBaseModal, setOpenBaseModal] = useState(false)
    const [openSmallModal, setOpenSmallModal] = useState(false)
    const [openLargeModal, setOpenLargeModal] = useState(false)



    return (
        <div className="w-full h-full md:h-screen bg-background">
            <HeadBar title="Modals" />

            <div className="grid grid-cols-1 gap-4 p-4">
                <div>
                    <Button onClick={() => setOpenSmallModal(!openSmallModal)}>Open Small Modal</Button>
                    <Modal size={"sm"} open={openSmallModal} setOpen={() => setOpenSmallModal(false)}>
                        <ModalHeader>
                            Modal Small
                        </ModalHeader>
                        <ModalBody>Esto es un texto del body</ModalBody>
                        <ModalFooter>
                            <Button variant={"danger"} onClick={() => setOpenSmallModal(false)}>Close Small Modal</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <Button onClick={() => setOpenBaseModal(!openBaseModal)}>Open Medium Modal</Button>
                    <Modal  open={openBaseModal} setOpen={() => setOpenBaseModal(false)}>
                        <ModalHeader>Modal Default</ModalHeader>
                        <ModalBody>Esto es un texto del body</ModalBody>

                    </Modal>
                </div>
                <div>
                    <Button onClick={() => setOpenLargeModal(!openLargeModal)}>Open Large Modal</Button>
                    <Modal size={"lg"} open={openLargeModal} setOpen={() => setOpenLargeModal(false)}>
                        <ModalHeader>Modal Large</ModalHeader>
                        <ModalBody>Esto es un texto del body</ModalBody>
                        <ModalFooter>Esto es un footer del Modal</ModalFooter>
                    </Modal>
                </div>

            </div>
        </div>
    );
}
