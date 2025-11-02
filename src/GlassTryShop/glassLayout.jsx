import { useState } from "react"

export default function Glass(props) {
    const { glassProp, onGetGlassDetailFromGlassProp } = props;
    const { url, name } = glassProp;

    const handelDetail = () => {
        onGetGlassDetailFromGlassProp(glassProp)
    }
    return (
        <div className='grid grid-cols-6  gap-2 items-center p-5'>

            <img src={url} alt="" />
            <p>{name}</p>

            {/* <img src="./glassesImage/g1.jpg" alt="" />
            <img src="./glassesImage/g2.jpg" alt="" />
            <img src="./glassesImage/g3.jpg" alt="" />
            <img src="./glassesImage/g4.jpg" alt="" />
            <img src="./glassesImage/g5.jpg" alt="" />
            <img src="./glassesImage/g6.jpg" alt="" />
            <img src="./glassesImage/g7.jpg" alt="" />
            <img src="./glassesImage/g8.jpg" alt="" />
            <img src="./glassesImage/g9.jpg" alt="" />
            <img src="./glassesImage/v1.png" alt="" />
            <img src="./glassesImage/v2.png" alt="" />
            <img src="./glassesImage/v3.png" alt="" />
            <img src="./glassesImage/v4.png" alt="" />
            <img src="./glassesImage/v5.png" alt="" />
            <img src="./glassesImage/v6.png" alt="" />
            <img src="./glassesImage/v7.png" alt="" />
            <img src="./glassesImage/v8.png" alt="" />
            <img src="./glassesImage/v9.png" alt="" /> */}

        </div>
    )
}
