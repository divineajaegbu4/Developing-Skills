import getWikiResults from "@/lib/getWikiResults";

type Props = {
  params: {
    search: string;
  };
};

async function page({ params: { search } }: Props) {
  console.log("search", search)
  const wikiData: Promise<SearchResult> = getWikiResults(search);
  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <p>{JSON.stringify(result)}</p>;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${search} is not found`}</h2>
      )}
    </main>
  );

  return content;
}

export default page;
