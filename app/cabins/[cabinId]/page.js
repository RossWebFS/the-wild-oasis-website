import { Suspense } from "react";

import Reservation from "@/app/_components/Reservation";
import { getCabin, getCabins } from "@/app/_lib/data-services";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

export const generateMetadata = async ({ params }) => {
  const { name } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name}`,
  };
};

export const generateStaticParams = async () => {
  const cabins = await getCabins();
  const ids = cabins.map(cabin => ({
    cabinId: String(cabin.id),
  }));

  return ids;
};

const Page = async ({ params }) => {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="mb-10 text-center text-5xl font-semibold text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
