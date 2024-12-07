import { Link } from "react-router-dom"

interface NewsData {
    judul: string;
    slug: string;
    img: string;
    creator: string;
    isi: string
}

interface NewsProps {
    newsData: NewsData[]
}
export function News({ newsData }: NewsProps) {

    if (!newsData || newsData.length === 0) {
        return <div>Data tidak di temukan</div>
    }

    
    return (
        <section className="border p-6 w-[90%] mx-auto mt-10 rounded-md shadow-md">
            <div className="md:flex gap-5 flex-wrap ">
                {newsData.map((data, id) => (
                    <div  className="shadow-md p-3 rounded-md md:w-[20%] transition ease-in-out delay-150 hover:shadow-red-700 hover:-translate-y-1 duration-500 flex flex-col justify-between gap-5 md:my-0 my-10">
                        <div>
                            <img src={data.img} className="rounded-md mx-auto" />
                        </div>
                        <div className="mx-auto">
                            <p className="text-center mt-5 text-xl font-semibold">{data.judul}</p>
                            <p className="text-center mb-5 text-sm text-slate-500">{data.creator}</p>
                            <p className="text-center">{data.isi.length >10 ? `${data.isi.slice(0,10)}...` : data.isi}</p>
                        </div>
                        <Link key={id} to={`/detail/${data.slug}`} className="block mx-auto bg-red-700 px-4 py-2 text-white rounded-md transition hover:-translate-y-1 duration-300">Baca Selengkapnya</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}