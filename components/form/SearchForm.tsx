'use client';
import SearchResult from '@/components/translation/SearchResult';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Translation } from '@/types/translation.type';
import { createClient } from '@/utils/supabase/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { debounce } from 'lodash';
import { SearchIcon } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import React from 'react';
const supabase = createClient();

const formSchema = z.object({
  search_text: z.string().optional(),
  source_language: z.string().optional(),
  target_language: z.string().optional(),
  sort_by: z.string().optional(),
});
export default function SearchForm() {
  const [results, setResults] = useState<Translation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search_text: '',
      source_language: '',
      target_language: '',
      sort_by: 'created_at',
    },
  });
  const fetchResults = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const { search_text, source_language, target_language, sort_by } = values;

    let query = supabase.from('translations').select();
    if (search_text) {
      query = query.or(`source_text.ilike.%${search_text}%,translated_text.ilike.%${search_text}%`);
    }

    // if (source_language && source_language !== "all") {
    //   query = query.eq("source_language", source_language);
    // }
    // if (target_language && target_language !== "all") {
    //   query = query.eq("target_language", target_language);
    // }
    // if (sort_by) {
    //   query = query.order(sort_by, { ascending: true });
    // }

    const { data, error } = await query;
    setLoading(false);
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setResults(data);
    }
  };
  const debouncedFetchResults = useCallback(debounce(fetchResults, 500), []);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    debouncedFetchResults(values);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="search_text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search Text</FormLabel>
                <FormControl>
                  <Input placeholder="Enter text to search" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button isGradient type="submit" className="mt-4 w-full">
            <SearchIcon />
          </Button>
        </form>
      </Form>
      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">Results</h2>
        <SearchResult results={results} loading={loading} />
      </div>
    </>
  );
}
