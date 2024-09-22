import SearchForm from '@/components/form/SearchForm';

export default function SearchPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 font-poppin">
      <h1 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Search Translations</h1>
      <SearchForm />
    </div>
  );
}
