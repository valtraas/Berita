import { useEffect, useState } from "react";
import { News } from "./News";
import { Search } from "./Search";

interface NewsData {
    judul: string;
    slug: string;
    img: string;
    creator: string;
    isi: string;
}

export function Home() {
    const [newsData, setNewsData] = useState<NewsData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string >("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/Data.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setNewsData(data.Data);
            } catch (err: unknown | any) {
                setError(err.message || "Something went wrong");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filterData = newsData.filter((data)=> data.judul.toLowerCase().includes(query?.toLowerCase()))
    return (
        <>
            <Search setQuery={setQuery}/>
            <News newsData={filterData} />
        </>
    );
}
