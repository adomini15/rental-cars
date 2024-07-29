"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema } from "./AddCarForm.schema";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { AddCarFormProps } from "./AddCarForm.types";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function AddCarForm(props: AddCarFormProps) {
  const { setOpenDialog } = props;
  const router = useRouter();
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cv: "",
      engine: "",
      people: "",
      photo: "",
      priceDay: "",
      transmission: "",
      type: "",
      isPublish: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpenDialog(false);

    try {
      await axios.post("/api/car", values);
      toast({
        title: "Car created ✅",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Tesla Model S Plaid" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Power</FormLabel>
                  <FormControl>
                    <Input placeholder="150 CV" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Transmission</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of car" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="automatic">Automatic</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="people"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>People</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the quantity of people" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="engine"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Engine</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the engine of the car" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="gasoil">Gasoline</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type of  car" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                      <SelectItem value="familiar">Familiar</SelectItem>
                      <SelectItem value="luxe">Luxe</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Image</FormLabel>

                  {photoUploaded ? (
                    <p className="text-sm text-green-400">Image uploaded!</p>
                  ) : (
                    <FormControl>
                      <UploadButton
                        className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-1"
                        {...field}
                        endpoint="photo"
                        onClientUploadComplete={(res) => {
                          form.setValue("photo", res?.[0].url);
                          setPhotoUploaded(true);
                        }}
                        onUploadError={(error) => {
                          console.log(error);
                        }}
                      />
                    </FormControl>
                  )}

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="priceDay"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Price per Day</FormLabel>
                  <FormControl>
                    <Input placeholder="20€" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <Button type="submit" className="w-full mt-5" disabled={!isValid}>
          Create
        </Button>
      </form>
    </Form>
  );
}

export default AddCarForm;
