"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Filter = () => {
  const serachParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = serachParams.get("capacity") ?? "all";

  const handleFilter = filter => {
    const params = new URLSearchParams(serachParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex border border-primary-800">
      <Button filter="all" activeFilter={activeFilter} onFilter={handleFilter}>
        All cabins
      </Button>
      <Button
        filter="small"
        activeFilter={activeFilter}
        onFilter={handleFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        activeFilter={activeFilter}
        onFilter={handleFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        activeFilter={activeFilter}
        onFilter={handleFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
};

const Button = ({ children, filter, activeFilter, onFilter }) => {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === filter ? "bg-primary-700 text-primary-50" : ""}`}
      onClick={() => onFilter(filter)}
    >
      {children}
    </button>
  );
};

export default Filter;
