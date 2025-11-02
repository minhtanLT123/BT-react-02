import { useState } from "react"
import glassData from './glassData.json'
import Model from "./model";
import Glass from "./glassLayout";
import Header from "./header";
import Footer from "./footer";

export default function GlassTry() {
    const [glasses, setGlasses] = useState(glassData);
    const [glassTryDetail, setGlassTryDetail] = useState(null);

    const onGetGlassDetailFromGlass = (glasses) => {
        setGlassTryDetail(glasses);

    };

    const renderListGlasses = () => {
        return glasses.map((glass) => (
            <Glass
                key={glass.id}
                glassProp={glass}
                onGetGlassDetailFromGlassProp={onGetGlassDetailFromGlass}


            />

        ));

    };

    return (
        <div className="  flex flex-col">
            <div>
                <Header />
            </div>
            <div className="m-5 grid grid-cols-2">
                <Model />
                <div>
                    {renderListGlasses()}
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
