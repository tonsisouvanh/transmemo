'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CopyIcon, ArrowLeftIcon, EditIcon } from 'lucide-react';
import { useGetTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

// Assume we have a custom hook to fetch translation details

export default function TranslationDetailPage() {
  const { id } = useParams();
  const { data: translation, isLoading, error } = useGetTranslation(parseInt(id as string));

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };
  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <Card className="flex h-96 w-full items-center justify-center">
          <div className="animate-pulse text-xl">Loading...</div>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <Card className="w-full border-red-200 bg-red-50 p-6">
          <CardTitle className="mb-2 text-red-700">Error</CardTitle>
          <p className="text-red-600">Failed to load translation details. Please try again later.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl space-y-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">Translation Detail</h1>
        <Link href="/translation-search">
          <Button variant="outline" size="sm">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Search
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="mb-2 text-lg font-medium sm:text-xl md:text-2xl">
                {translation.source_text}
              </CardTitle>
              <div className="flex space-x-2">
                <Badge>{translation.source_language}</Badge>
                <Badge>{translation.target_language}</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <EditIcon className="mr-2 h-4 w-4" /> Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="translation" className="w-full">
            <TabsList>
              <TabsTrigger value="translation">Translation</TabsTrigger>
              <TabsTrigger value="context">Context</TabsTrigger>
              <TabsTrigger value="metadata">Metadata</TabsTrigger>
            </TabsList>
            <TabsContent value="translation" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-base font-medium sm:text-lg md:text-xl">{translation.translated_text}</p>
                </CardContent>
                <CardFooter className="bg-muted">
                  <Button variant="secondary" size="sm" onClick={() => handleCopy(translation.translated_text)}>
                    <CopyIcon className="mr-2 h-4 w-4" /> Copy Translation
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="context" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm sm:text-base md:text-lg">{translation.context || 'No context provided'}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="metadata" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-semibold text-muted-foreground sm:text-sm md:text-base">
                        Created At
                      </dt>
                      <dd className="text-xs sm:text-sm md:text-base">
                        {new Date(translation.created_at).toLocaleString()}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-muted-foreground sm:text-sm md:text-base">
                        Updated At
                      </dt>
                      <dd className="text-xs sm:text-sm md:text-base">
                        {new Date(translation.updated_at).toLocaleString()}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-muted-foreground sm:text-sm md:text-base">
                        Created By
                      </dt>
                      <dd className="text-xs sm:text-sm md:text-base">{translation.created_by}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-muted-foreground sm:text-sm md:text-base">
                        Last Updated By
                      </dt>
                      <dd className="text-xs sm:text-sm md:text-base">{translation.updated_by}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
