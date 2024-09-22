import TranslationAddForm from '@/components/form/TranslationAddForm';

export default function AddTranslationPage() {
  return (
    <>
      <div className="container mx-auto max-w-6xl py-16">
        <h1 className="mb-4 text-2xl font-bold">Add Translation</h1>
        <TranslationAddForm />
      </div>
    </>
  );
}
