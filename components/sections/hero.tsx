"use client";

import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/buttons/moving-border";
import { Dispatch, SetStateAction, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { SignupFormDemo } from "../form/quote-form";
import { HeroHighlight, Highlight } from "../hero-highlight";

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: "Name must be at least 2 characters long",
      })
      .max(50),
    emailAddress: z
      .string()
      .email()
      .min(2, {
        message: "email must be at least two characters long",
      })
      .max(50),
    accountType: z.enum(["company", "personal"]),
    companyName: z.string().optional(),
    message: z.string().min(2),
    // address: z.string().min(1),
    // city: z.string().min(1),
    // zipCode: z.string().min(1),
    // state: z.string().min(1),
    // country: z.string().min(1),
    phone: z.string().min(10),
  })
  .refine(
    (data) => {
      if (data.accountType === "company") {
        return !!data.companyName;
      }
      return true;
    },
    {
      message: "Company name is required",
      path: ["companyName"],
    }
  );

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 md:h-[40rem] md:py-4">
        <div className="relative z-10 w-full p-4 text-center">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />
          {/* <h1 className="mt-20 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:mt-0 md:text-7xl">
            AF Rack Installations
            <br />
            Worlwide Material Handling Leader
          </h1> */}
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              <Highlight className="text-black dark:text-white">
                AF Rack Installations
              </Highlight>
              <br />
              Worlwide Material Handling Leader
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 md:text-lg"
            >
              Dive into our comprehensive music courses and transform your
              musical journey today. Whether you&apos;re a beginner or looking
              to refine your skills, join us to unlock your true potential.
            </motion.p>
            <div className="mt-4 flex flex-col items-center justify-between">
              <>
                <Button
                  onClick={() => setIsOpen(true)}
                  borderRadius="1.75rem"
                  className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-black dark:text-white"
                >
                  Get a Quote
                </Button>
                <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
              </>
            </div>
          </HeroHighlight>
        </div>
      </div>
    </>
  );
};

export default Hero;

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      name: "",
      phone: "",
      message: "",
      companyName: "",
    },
  });

  const accountType = form.watch("accountType");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
    toast.success("Form successfully validated");
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
          >
            <SignupFormDemo isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* <AlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                  <AlertCircle />
                </div>
                <Card className="bg-transparent border-none">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-2">
                      Get a quick quote
                    </CardTitle>
                    <CardDescription className="text-center mb-6 text-white">
                      Please fill out the form below and we will usually respond
                      to your inquiry on the same business day.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white text-black"
                                    placeholder="Please enter your first and last name"
                                    type="text"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="emailAddress"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white text-black"
                                    placeholder="Email Address"
                                    type="email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="accountType"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Account Type</FormLabel>
                                <Select onValueChange={field.onChange}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue
                                        className="text-black"
                                        placeholder="Select an account type"
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="personal">
                                      Personal
                                    </SelectItem>
                                    <SelectItem value="company">
                                      Company
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                        {accountType === "company" && (
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => {
                              return (
                                <FormItem>
                                  <FormLabel>Company Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      className="bg-white text-black"
                                      placeholder="Company Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              );
                            }}
                          />
                        )} */}
            {/* <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white text-black"
                                    type="text"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white text-black"
                                    type="text"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white text-black"
                                    type="text"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Zip Code</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white text-black"
                                    type="text"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white text-black"
                                    type="text"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        /> */}
            {/* <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Please enter your phone number"
                                    className="bg-white text-black"
                                    type="text"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Please leave a detailed description of your project requirements"
                                    className="bg-white text-black"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                      </form>
                    </Form>
                  </CardContent>
                </Card>
  
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                  >
                    Submit
                  </button> */}
            {/* </div>
              </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
