import GlassTryOnModel from "./glassTry";

export default function Model(props) {
    const { glassTryDetail } = props;
    return (
        <div className='flex items-center justify-center relative'>
            <img src="./glassesImage/model.jpg" alt="model" className="" />
            <div className="absolute scale-160 top-40 ">
                <GlassTryOnModel glassTryDetail={glassTryDetail} />
            </div>
        </div>
    )
}
