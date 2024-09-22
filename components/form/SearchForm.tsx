'use client';
import SearchResult from '@/components/translation/SearchResult';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useGetTranslations } from '@/hooks/useTranslation';
import { Translation } from '@/types/translation.type';
import { zodResolver } from '@hookform/resolvers/zod';
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import { SearchIcon } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const options = {
  includeScore: true,
  threshold: 0.4,
  keys: ['source_text', 'translated_text'],
  ignoreLocation: true,
  minMatchCharLength: 2,
  shouldSort: true,
  findAllMatches: true,
};

const formSchema = z.object({
  search_text: z.string().optional(),
  source_language: z.string().optional(),
  target_language: z.string().optional(),
  sort_by: z.string().optional(),
});

export default function SearchForm() {
  const [filteredResults, setFilteredResults] = useState<Translation[]>([]);
  const { data: results, isLoading, isError } = useGetTranslations();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search_text: '',
      source_language: '',
      target_language: '',
      sort_by: 'created_at',
    },
  });

  const debouncedSearch = useCallback(
    debounce((values: z.infer<typeof formSchema>) => {
      const { search_text } = values;
      if (search_text) {
        const fuseInstance = new Fuse(results || [], options);
        const filteredResults = fuseInstance.search(search_text).map(result => result.item);
        setFilteredResults(filteredResults);
      } else {
        setFilteredResults(results || []);
      }
    }, 300),
    [results]
  );

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    debouncedSearch(values);
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
        {isError ? (
          <p className="text-red-500">An error occurred while fetching translations</p>
        ) : (
          <SearchResult results={filteredResults} loading={isLoading} />
        )}
      </div>
    </>
  );
}
