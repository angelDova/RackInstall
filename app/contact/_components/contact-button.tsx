"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const ContactButton = (props: Props) => {
  const { open } = useModal();

  return (
    <Button size={"icon"} onClick={open} className="z-50">
      <Plus />
    </Button>
  );
};

export default ContactButton;
