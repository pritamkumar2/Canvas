import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../ContextApi/AppProvider";
import { SearchIcon } from "../../navigation/SearchIcon";
import { Input } from "@nextui-org/react";
import { useFilterContext } from "../../ContextApi/Filter_context";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const Searching = () => {
  const { products } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { dispatch } = useFilterContext();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearch = debounce((query) => {
    const results = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(query);
      const tagMatch = product.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );
      return nameMatch || tagMatch;
    });

    dispatch({ type: "SEARCH_PRODUCTS", payload: results });

    setSearchResults(results);
  }, 300);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleSearch(searchQuery.toLowerCase());
  }, [searchQuery, handleSearch]);

  return (
    <div ref={searchRef} className="relative z-50 bg-white">
      <Input
        className={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={12} />}
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <ul className="absolute top-full left-0 right-0 mt-2 z-40 bg-white divide-y divide-gray-200 sm:w-64 md:w-96 max-h-60 overflow-y-auto">
          {searchResults.map((product) => (
            <li
              key={product._id}
              className="py-2"
              onClick={() => {
                navigate("/products");
              }}
            >
              <div className="flex items-center">
                <span className="font-medium">{product.name}</span> -{" "}
                {product.tags.map((tag) => {
                  const tagLower = tag.toLowerCase();
                  const queryLower = searchQuery.toLowerCase();
                  let matchingSubstring = "";

                  for (let i = 0; i < queryLower.length; i++) {
                    if (tagLower[i] === queryLower[i]) {
                      matchingSubstring += tag[i];
                    } else {
                      break;
                    }
                  }

                  return (
                    <span className="text-gray-500">{matchingSubstring}</span>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500">{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searching;
