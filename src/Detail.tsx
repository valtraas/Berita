import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface NewsData {
    judul: string;
    slug: string;
    img: string;
    creator: string;
    isi: string;
}
export function Detail() {
    const { slug } = useParams();
    const [newsData, setNewsData] = useState<NewsData[]>([])
    const [loading, setIsloading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/Data.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status : ${response.status}`)
                }
                const data = await response.json();
                setNewsData(data.Data);
            } catch (err: any) {
                setError(err.message || "Something went wrong")
            } finally {
                setIsloading(false);
            }
        }
        fetchData();
    }, [])
    if (loading) {
        return <div>loading....</div>
    }
    if (error) {
        return <div>Error : {error}</div>
    }
    const detailData = newsData.find((data) => data.slug == slug);
    if (!detailData) {
        return <h1>DATA TIDAK DITEMUKAN</h1>
    }
    return (
        <>
            <div className="mt-5 p-6 w-[60%] border mx-auto rounded-md shadow-md">
                <Link to={'/'} className="px-4 py-2 border rounded-md border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition ease-in-out hover:-translate-y-1 duration-300 mb-5">
                    Kembali
                </Link>
                <div className="mt-5">
                    <div className="mb-5">
                        <img src={detailData.img} className="mx-auto mt-10 rounded-md" />
                    </div>
                    <h2 className="text-center md:text-4xl text-2xl">{detailData.judul}</h2>
                    <p className="text-center text-sm text-slate-500 mt-2">{detailData.creator}</p>
                    <div className="my-5">
                        <p>{detailData.isi}</p>
                    </div>
                </div>
            </div>
        </>
    )
}