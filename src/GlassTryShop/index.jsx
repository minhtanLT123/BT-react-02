import { useState } from "react"
import glassData from './glassData.json'
import Model from "./model";
import Glass from "./glassLayout";
import Header from "./header";
import Footer from "./footer";

export default function GlassTryShop() {
    const [glasses, setGlasses] = useState(glassData);
    const [glassTryDetail, setGlassTryDetail] = useState(null)



    // Hàm xử lý khi click Try
    const findIndexGlassToTry = (id) => {
        const glass = glasses.find((item) => item.id === id)
        setGlassTryDetail(glass)

    }
    const renderListGlasses = () => {
        return glasses.map((glass) => (
            <Glass
                key={glass.id}
                glassProp={glass}
                findIndexGlassToTry={findIndexGlassToTry}
            />
        ));
    };

    return (
        <div className=" ">

            <Header />

            <div className="grid grid-cols-2">
                {/* Model */}
                <div className="m-10">
                    <Model glassTryDetail={glassTryDetail} />
                </div>
                {/* Danh sách kính */}
                <div className="grid grid-cols-5 gap-2 text-center h-[150px]   ">

                    {renderListGlasses()}

                </div>
            </div>

            <Footer />

        </div>
    )
}
