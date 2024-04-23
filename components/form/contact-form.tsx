// import { WorkflowFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useModal } from "@/providers/modal-provider";

type Props = {
  title?: string;
  subTitle?: string;
};

const ContactForm = ({ subTitle, title }: Props) => {
  const { close } = useModal();

  const router = useRouter();

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

  const form = useForm<z.infer<typeof QuoteSchema>>({
    mode: "onChange",
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

  const isLoading = form.formState.isLoading;

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
    <Card className="w-full max-w-[650px] border-none">
      {title && subTitle && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subTitle}</CardDescription>
        </CardHeader>
      )}
      <CardContent>
        <Form {...form}>
          <form onSubmit={() => {}} className="flex flex-col gap-4 text-left">
            <FormField
              disabled={isLoading}
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-4" disabled={isLoading} type="submit">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                </>
              ) : (
                "Save Settings"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
