import GlassTryOnModel from "./glassTry";

export default function Model(props) {
    return (
        <div className='flex items-center justify-center relative'>
            <img src="./glassesImage/model.jpg" alt="model" />
            <div className="absolute w-70">
                <GlassTryOnModel />
            </div>
        </div>
    )
}
