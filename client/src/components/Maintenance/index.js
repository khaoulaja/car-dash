import React, {useState} from "react";



const Maintenance = ()=>{
    const [maintenance] = useState([
        {
            id: 'check-engine',
            value: 'check engine'
        },
        {
            id: 'tire-pressure',
            value: 'tire pressure'
        },
        {
            id: 'car-lights',
            value: 'headlights & tail lights'
        },
        {
            id: 'wiper-blades',
            value: 'wiper blades'
        },
        {
            id: 'engine-oil',
            value: 'engine oil'
        },
        {
            id: 'coolant',
            value: 'coolant'
        },
        {
            id: 'wiper-fluid',
            value: 'windshield wiper fluid'
        },
        {
            id: 'transmission-fluid',
            value: 'transmission fluid'
        },
        {
            id: 'battery',
            value: 'battery & cables'
        },
        {
            id: 'belts',
            value: 'belts'
        },
        {
            id: 'engine-air-filter',
            value: 'engine air filter'
        },
        {
            id: 'hoses',
            value: 'hoses'
        },
        {
            id: 'power-steering-fluid',
            value: 'power steering fluid'
        },
        {
            id: 'exhaust',
            value: 'exhaust'
        },
        {
            id: 'tires-condition',
            value: 'tires condition'
        },
        {
            id: 'chassis',
            value: 'chassis lubrication'
        },
        {
            id: 'breaks',
            value: 'breaks'
        },
        {
            id: 'cabin-filter',
            value: 'cabin air filter'
        },
        {
            id: 'spark-plugs',
            value: 'spark plugs'
        },
        {
            id: 'car-wash',
            value: 'car wash'
        }
    ])
    return (
        <div className=" bg-hero p-10 flex justify-center md:p-20">
        {/* <div className="flex-col lg:flex-row lg:flex  p-10 rounded-lg"> */}
            <form id="maintenance-form" className="bg-white w-fit p-10 rounded-lg drop-shadow-xl mt-auto mx-auto">
                <h1 className="text-slate-800 font-bold text-2xl mb-10 capitalize">Select all maintenance / service due</h1>
                <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 m-auto ">
                        {maintenance.map((type)=>
                    <div className="relative flex w-fit h-[160px] check" key={type.id}>
                        <input type="checkbox" id={type.id} value={type.value} className="absolute opacity-20 checked:opacity-100 top-[4px] peer w-5 h-5 left-[24px] accent-indigo-600 rounded-full" />
                        <label htmlFor={type.id} 
                        className="pt-9 pb-6 text-center px-4 w-48 font-bold capitalize transition-colors duration-200 ease-in-out border-2 rounded select-none peer-checked:text-indigo-600 peer-checked:border-indigo-600">
                        <span>
                            <img src={require(`../../assets/images/maintenance-icons/${type.id}.png`)} 
                            className="h-16 m-auto mb-2"/>
                        </span>
                        {type.value}</label>
                    </div>
                        )}
                </div>
               

                <div className="my-6 self-end">
                    <button className="py-2 px-6 float-left text-center bg-slate-200 text-slate-500 rounded-full duration-700 hover:text-slate-600 hover:bg-slate-300">Cancel</button>
                    <button type="submit" 
                    className="py-2 px-6 float-right text-center text-slate-300 rounded-full duration-700 bg-indigo-500 hover:bg-indigo-600"
                    >submit</button>
                </div>

            </form>
        </div>
    
    )
}

export default Maintenance;