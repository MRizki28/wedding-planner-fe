import { ReactElement, useEffect, useState } from "react";
import { CiForkAndKnife } from "react-icons/ci";

interface Category {
    name: string;
    icon: ReactElement;
    id: number;
}

export function ModalVanue() {

    const [data, setData] = useState<Category[]>([]);

    const category = [
        {
            name: "Kue dan Katering",
            icon: <CiForkAndKnife className="text-xl"></CiForkAndKnife>
        }
    ]

    const resultData: Category[] = [];

    const renderData = () => {
        for (let i = 0; i < 10; i++) {
            resultData.push({ ...category[0], id: i })
        }
    }

    useEffect(() => {
        renderData()
        setData(resultData)

    }, [])

    return (
        <div className="absolute top-[1035px] left-0 right-0 flex items-center justify-center z-50 ">
            <div className="mt-5 p-4 w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="grid grid-cols-3 text-[#49516F] font-poppinsRegular">
                    {data.map((item) => (
                        <div key={item.id}>
                            <button className="flex space-x-2 hover:rounded-lg hover:border hover:shadow-sm rounded-lg px-3 py-2">
                                {item.icon}
                                <span>{item.name}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}