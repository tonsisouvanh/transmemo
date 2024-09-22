import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CopyIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Translation } from '@/types/translation.type';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

type SearchResultProps = {
  results: Translation[];
  className?: string;
  loading?: boolean;
};

export default function SearchResult({ className, results, loading }: SearchResultProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loading) {
      setProgress(0);
      timer = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 10 : 100));
      }, 500);
    } else {
      setProgress(100);
    }
    return () => clearInterval(timer);
  }, [loading]);
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };
  return (
    <div className={cn('', className)}>
      {loading ? (
        <Progress value={progress} className="w-full" />
      ) : results?.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results?.map((result: Translation) => (
            <Card className="transition duration-300 hover:shadow-lg" key={result?.id}>
              <CardHeader className="">
                <CardTitle className="h-16">
                  <Link className="hover:underline" href={`/translations/${result?.id}`}>
                    <span className="line-clamp-3 leading-5">{result?.source_text}</span>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="line-clamp-3">
                  <span className="font-semibold">Translated:</span> {result?.translated_text}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{result?.source_language}</Badge>
                  <Badge variant="secondary">{result?.target_language}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Context:</span> {result?.context}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => handleCopy(result?.translated_text as string)}
                >
                  <CopyIcon className="mr-2 h-4 w-4" /> Copy Translation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">No results found.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
