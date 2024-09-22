import { createClient } from "@/utils/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { getLocalDateTime } from "@/lib/utils";

const supabase = createClient();

// Fetch translations
const fetchTranslations = async () => {
  const { data, error } = await supabase.from("translations").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const useGetTranslations = () => {
  return useQuery({
    queryKey: ["translations"],
    queryFn: () => fetchTranslations(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

// Fetch translations
const fetchTranslationById = async (id: number) => {
  const { data, error } = await supabase
    .from("translations")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const useGetTranslation = (id: number) => {
  return useQuery({
    queryKey: ["translations", id],
    queryFn: () => fetchTranslationById(id),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

// Add a new translation
const addTranslation = async (newTranslation: any) => {
  const { data, error } = await supabase.from("translations").insert({
    ...newTranslation,
    created_at: getLocalDateTime(),
    updated_at: getLocalDateTime(),
  });
  if (error) throw new Error(error.message);
  return data;
};

export const useAddTranslation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTranslation,
    onSuccess: () => {
      toast.toast({
        variant: "success",
        title: "Success",
        description: "Translation added successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["translations"] });
    },
    onError: (error: any) => {
      toast.toast({
        title: "Error",
        description: error.message,
      });
    },
  });

  return mutation;
};
// // Update a translation
// const updateTranslation = async ({
//   id,
//   updatedTranslation,
// }: {
//   id: number;
//   updatedTranslation: any;
// }) => {
//   const { data, error } = await supabase
//     .from("translations")
//     .update(updatedTranslation)
//     .eq("id", id);
//   if (error) throw new Error(error.message);
//   return data;
// };

// // export const useUpdateTranslation = () => {
// //   const queryClient = useQueryClient();
// //   return useMutation(updateTranslation, {
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(["translations"]);
// //     },
// //   });
// // };

// // // Delete a translation
// // const deleteTranslation = async (id: number) => {
// //   const { data, error } = await supabase
// //     .from("translations")
// //     .delete()
// //     .eq("id", id);
// //   if (error) throw new Error(error.message);
// //   return data;
// // };

// // export const useDeleteTranslation = () => {
// //   const queryClient = useQueryClient();
// //   return useMutation(deleteTranslation, {
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(["translations"]);
// //     },
// //   });
// // };
