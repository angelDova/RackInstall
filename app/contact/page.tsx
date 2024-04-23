"use client";

import * as z from "zod";
import { BackgroundBeams } from "@/components/background-beams";
import { SignupFormDemo } from "@/components/form/quote-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import ContactButton from "./_components/contact-button";

type Props = {};

const Contact = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const FormSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    firstName: z.string().min(1, {
      message: "Please enter your first name",
    }),
    lastName: z.string().min(1, {
      message: "Please enter your last name",
    }),
    phone: z.string().min(1, {
      message: "Please enter your phone number",
    }),
    message: z.string().min(1, {
      message: "Please enter your message",
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          ...form,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      toast.success("Form Submitted!");
      console.log("Submitted!");
      return res;
    } catch (error) {
      console.log("Err", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen py-12 pt-24 border border-t-white  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="min-h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact Us
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>

          <BackgroundBeams />
        </div>
        <ContactButton />
      </div>
    </div>
  );
};

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
