import SearchForm from '@/components/form/SearchForm';

export default function SearchPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 font-poppin">
      <h1 className="mb-4 text-2xl font-bold">Search Translations</h1>
      <SearchForm />
    </div>
  );
}
