"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useModal } from "@/providers/modal-provider";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "../form/contact-form";

type Props = {
  title: string;
  description: string;

  defaultOpen?: boolean;
};

const CustomModal = ({ title, description, defaultOpen }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, close } = useModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Drawer open={isOpen} onClose={close}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerDescription className="flex h-96 flex-col items-center gap-4 overflow-scroll text-center">
            {description}
            <ContactForm />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col gap-4 border-t-[1px] border-t-muted bg-background">
          <DrawerClose>
            <Button variant="ghost" className="w-full" onClick={close}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomModal;
