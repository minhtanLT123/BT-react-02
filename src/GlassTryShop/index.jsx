import { useState } from "react"
import glassData from './glassData.json'
import Model from "./model";
import Glass from "./glass";

export default function GlassTry() {
    const [glassDataList, setGlassDataList] = useState(glassData);

    return (

        <div className=" container bg-[url(./images/background.jpg)] bg-no-repeat w-full h-full">
            <div className="grid grid-rows-2 ">
                <div className="mx-auto w-50" >
                    <Model />
                </div>
                <div>
                    <Glass />
                </div>
            </div>

        </div>
    )
}
