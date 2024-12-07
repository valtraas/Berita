import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface SearchProps {
    setQuery: (query: string) => void; 
}

export function Search({ setQuery }: SearchProps) {
    const [input, setInput] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        console.log(input)
        e.preventDefault(); 
        setQuery(input); 
    };

    return (
        <div className="mx-auto mt-16">
            <form
                onSubmit={handleSubmit}
                className="flex  justify-center gap-5"
            >
                <div className="rounded-md px-2 py-1 border border-red-700 md:w-1/4 flex gap-2 items-center">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input
                        type="text"
                        className="w-full outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Cari judul berita..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-red-700 px-4 py-2 rounded-md text-white transition shadow-md hover:border hover:bg-white  hover:border-red-700 hover:text-red-700 hover:-translate-y-1 duration-300 hover:shadow-red-700"
                >
                    Cari
                </button>
            </form>
        </div>
    );
}
