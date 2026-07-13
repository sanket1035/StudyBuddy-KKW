"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen } from "lucide-react";
import indexData from "@/content/index.json";

interface SearchItem {
  id: string;
  name: string;
  year: string;
  icon: string;
}

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten subjects for searching
  const allSubjects: SearchItem[] = React.useMemo(() => {
    const list: SearchItem[] = [];
    
    indexData["first-year"].forEach(sub => {
      list.push({ ...sub, year: "first-year" });
    });
    
    indexData["second-year"].forEach(sub => {
      list.push({ ...sub, year: "second-year" });
    });
    
    return list;
  }, []);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Run search when query changes
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = allSubjects.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
    setIsOpen(true);
    setSelectedIndex(-1);
  }, [query, allSubjects]);

  const handleSelect = (item: SearchItem) => {
    setQuery("");
    setIsOpen(false);
    router.push(`/${item.year}/${item.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        handleSelect(results[selectedIndex]);
      } else if (results.length > 0) {
        handleSelect(results[0]);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto z-40">
      {/* Search Input Box */}
      <div className="relative">
        <Search 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark" 
          size={20} 
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() !== "" && setIsOpen(true)}
          placeholder="Search subjects (e.g., Physics, Maths, DELD, Operating system)..."
          className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-border-light dark:border-border-dark shadow-sm focus:ring-2 focus:ring-primary dark:focus:ring-primary-fixed focus:border-primary dark:focus:border-primary-fixed bg-surface-container-lowest dark:bg-bg-dark text-body-lg text-on-surface dark:text-text-primary-dark transition-all outline-none"
        />
        
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark hover:text-on-surface dark:hover:text-text-primary-dark"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Floating Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-xl shadow-lg max-h-80 overflow-y-auto divide-y divide-border-light dark:divide-border-dark">
          {results.length > 0 ? (
            results.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full px-5 py-3.5 flex items-center justify-between text-left transition-colors ${
                  idx === selectedIndex 
                    ? "bg-surface-container dark:bg-inverse-surface text-primary dark:text-primary-fixed-dim" 
                    : "text-on-surface dark:text-text-primary-dark"
                }`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="opacity-60" />
                  <span className="font-sora font-semibold text-body-md">
                    {item.name}
                  </span>
                </div>
                
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container-low dark:bg-inverse-surface text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark">
                  {item.year === "first-year" ? "1st Year" : "2nd Year"}
                </span>
              </button>
            ))
          ) : (
            <div className="px-5 py-6 text-center text-text-secondary-light dark:text-text-secondary-dark text-body-sm">
              No subjects found matching &quot;<span className="font-semibold">{query}</span>&quot;.
              <div className="mt-1 text-[12px] opacity-75">
                Try searching for main subject keywords (e.g. Maths, DELD, Chemistry)
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
