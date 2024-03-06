"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import * as z from "zod";

interface SignupFormDemoProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SignupFormDemo = ({ isOpen, setIsOpen }: SignupFormDemoProps) => {
  const QuoteSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    firstName: z.string().min(1, {
      message: "Please enter your first name",
    }),
    lastName: z.string().min(1, {
      message: "Please enter your last name",
    }),
    companyName: z.string().min(1, {
      message: "Please enter your company name",
    }),
    phone: z.string().min(1, {
      message: "Please enter your phone number",
    }),
    message: z.string().min(1, {
      message: "Please enter your message",
    }),
  });

  const form = useForm({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof QuoteSchema>) => {
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
      return res;
    } catch (error) {
      console.log("Err", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Get a quick quote
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please fill out the form below and we will usually respond to your
        inquiry on the same business day.
      </p>
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="firstname">First name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="firstname"
                      placeholder="John"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="lastname">Last name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="firstname"
                      placeholder="Doe"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    placeholder="asc@afrackinstallations.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel htmlFor="companyName">Company Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="companyName"
                    placeholder="AF Rack Installations"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} id="phone" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    id="message"
                    placeholder="Please enter your project details"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            >
              Cancel
              <BottomGradient />
            </button>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </div>
          {/* 
        <div className="flex flex-col space-y-4">
        <button
        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
        >
        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        GitHub
        </span>
        <BottomGradient />
        </button>
        <button
        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
        >
        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        Google
        </span>
        <BottomGradient />
      </button> */}
          {/* <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            OnlyFans
            </span>
            <BottomGradient />
          </button> */}
          {/* </div> */}
        </form>
      </Form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
