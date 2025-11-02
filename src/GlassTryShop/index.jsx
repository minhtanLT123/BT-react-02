import { useState } from "react"
import glassData from './glassData.json'
import Model from "./model";
import Glass from "./glassLayout";
import Header from "./header";
import Footer from "./footer";

export default function GlassTryShop() {
    const [glasses, setGlasses] = useState(glassData);
    // const [glassDetail, setGlassDetail] = useState(null);
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
                findIndexGlassToTryProp={findIndexGlassToTry}
            />
        ));
    };

    return (
        <div className=" ">

            <Header />

            <div className="grid grid-col-2">
                {/* Model */}
                <div className="m-10">
                    <Model glassTryDetail={glassTryDetail} />
                </div>
                {/* Danh sách kính */}
                <div>
                    {renderListGlasses()}
                </div>
            </div>

            <Footer />

        </div>
    )
}
