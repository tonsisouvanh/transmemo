// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useAddTranslation } from "@/hooks/useTranslation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { ButtonLoading } from "../ui/ButtonLoading";

// const formSchema = z.object({
//   source_text: z.string().min(1, "Source text is required"),
//   translated_text: z.string().min(1, "Translated text is required"),
//   source_language: z.string().min(1, "Source language is required"),
//   target_language: z.string().min(1, "Target language is required"),
//   context: z.string().min(1, "Context is required"),
// });

// export default function TranslationAddForm() {
//   const { mutateAsync: addTransaction, isPending } = useAddTranslation();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       source_text: "dog",
//       translated_text: "ໝາ",
//       source_language: "EN",
//       target_language: "LA",
//       context: "Animal names",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     addTransaction(values);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <div className="grid grid-cols-2 gap-5">
//           <FormField
//             control={form.control}
//             name="source_text"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Source Text</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter source text" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="translated_text"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Translated Text</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter translated text" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="source_language"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Source Language</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a verified email to display" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="en">English</SelectItem>
//                     <SelectItem value="vi">Vietnamese</SelectItem>
//                     <SelectItem value="la">Lao</SelectItem>
//                     <SelectItem value="th">Thai</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="target_language"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Source Language</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a verified email to display" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="en">English</SelectItem>
//                     <SelectItem value="vi">Vietnamese</SelectItem>
//                     <SelectItem value="la">Lao</SelectItem>
//                     <SelectItem value="th">Thai</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="context"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Context</FormLabel>
//                 <FormControl>
//                   <Textarea
//                     placeholder="Any additional information about the text"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         {isPending ? (
//           <ButtonLoading />
//         ) : (
//           <Button className="mt-5" type="submit">
//             Submit
//           </Button>
//         )}
//       </form>
//     </Form>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useAddTranslation } from "@/hooks/useTranslation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ButtonLoading } from "../ui/ButtonLoading";
import { Input } from "../ui/input";

const formSchema = z.object({
  source_text: z.string().min(1, "Source text is required"),
  translated_text: z.string().min(1, "Translated text is required"),
  source_language: z.string().min(1, "Source language is required"),
  target_language: z.string().min(1, "Target language is required"),
  context: z.string().optional(),
});

export default function TranslationAddForm() {
  const { mutateAsync: addTransaction, isPending } = useAddTranslation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      source_text: "",
      translated_text: "",
      source_language: "vi",
      target_language: "la",
      context: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    addTransaction(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="source_language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source Language</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select source language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="vi">Vietnamese</SelectItem>
                      <SelectItem value="la">Lao</SelectItem>
                      <SelectItem value="th">Thai</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="target_language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Language</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select target language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="vi">Vietnamese</SelectItem>
                      <SelectItem value="la">Lao</SelectItem>
                      <SelectItem value="th">Thai</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="source_text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source Text</FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    className=""
                    placeholder="Enter source text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="translated_text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Translated Text</FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    placeholder="Enter translated text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="context"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Context</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Any additional information about the text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {isPending ? (
          <ButtonLoading className="mt-5" />
        ) : (
          <Button className="mt-5 w-full" isGradient type="submit">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}
