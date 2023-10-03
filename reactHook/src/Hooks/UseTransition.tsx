import { useState, useTransition } from "react";
import { users } from "../network/fakeData";
import "../App.css";
import { DetailsCard } from "../components/DetailsCard";

export function UseTransition() {
  const [searchItem, setSearchItem] = useState("");
  const [filtered, setFiltered] = useState(users);
  const [isPending, startTransition] = useTransition();

  const handleSearch = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setSearchItem(value);
    startTransition(() => {
      setFiltered(() =>
        users.filter((item) =>
          item.name.toLowerCase().includes(searchItem.toLowerCase())
        )
      );
    });
  };

  return (
    <main id="mainBox">
      <input
        type="text"
        className="searchText"
        placeholder="search your item"
        onChange={handleSearch}
        value={searchItem}
      />

      <section className="container">
        {isPending ? (
          <h1>Loading...</h1>
        ) : (
          filtered.map((data, index) => {
            return (
              <DetailsCard
                avatar={data.avatar}
                name={data.name}
                company={data.company}
                key={index}
              />
            );
          })
        )}
      </section>
    </main>
  );
}
