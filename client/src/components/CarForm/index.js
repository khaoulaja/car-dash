import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { ADD_CAR } from '../../utils/mutations';
import { QUERY_CARS, QUERY_ME } from '../../utils/queries';


const CarForm = () => {

    const [cars] = useState([
        {
            name: 'car8'
        },
        {
            name: 'car2'
        },
        {
            name: 'car3'
        },
        {
            name: 'car4'
        },
        {
            name: 'car5'
        },
        {
            name: 'car6'
        },
        {
            name: 'car7'
        },
        {
            name: 'car1'
        }
    ])

    //const [name, make, model, year, color, image, setText] = useState('');
    
    const [addCar, {error}] = useMutation(ADD_CAR);
    const [formState, setFormState] = useState({ name: '', make: '', model: '' ,year: '', color: ''});
    // const [imageName, setImage] =useState('car1');
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        // setImage(event.target.checked.value);
      };

    const handleFormSubmit = async event => {
        event.preventDefault();
       
        try {
           const{data}= await addCar({
                variables: {...formState}
            });
            console.log(data);
            
           window.location.assign('/dashboard');
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div className=" bg-hero p-10 md:p-20">
            <div className="flex flex-col lg:flex-row lg:flex justify-center p-10 rounded-lg">
                <form className="bg-white w-full  md:w-2/3 p-10 rounded-lg drop-shadow-xl mt-auto mx-auto md:mx-4" 
                onSubmit={handleFormSubmit}>
                    <h1 className="text-slate-800 font-bold text-2xl mb-10">Enter Your Car Info!</h1>
                    <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                        <input type="text" name="name" required 
                        className="block w-full appearance-none focus:outline-none bg-transparent"
                        value={formState.name}
                        onChange={handleChange}
                        />
                        <label htmlFor="name" className="text-slate-500 absolute  bottom-2 -z-1 duration-700">Car Name <span className="text-rose-600">*</span></label>
                    </div>
                    <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                        <input type="text" name="make" required 
                        className="block w-full appearance-none focus:outline-none bg-transparent"
                        value={formState.make}
                        onChange={handleChange}
                        />
                        <label htmlFor="make" className="text-slate-500 absolute bottom-2 -z-1 duration-700">Make <span className="text-rose-600">*</span></label>
                    </div>
                    <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                        <input type="text" name="model" required 
                        className="block w-full appearance-none focus:outline-none bg-transparent"
                        value={formState.model}
                        onChange={handleChange}
                        />
                        <label htmlFor="model" className="text-slate-500 absolute bottom-2 -z-1 duration-700">Model <span className="text-rose-600">*</span></label>
                    </div>
                    <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                        <input type="text" name="year" required 
                        className="block w-full appearance-none focus:outline-none bg-transparent"
                        value={formState.year}
                        onChange={handleChange}
                        />
                        <label htmlFor="year" className="text-slate-500 absolute bottom-2 -z-1 duration-700">Year <span className="text-rose-600">*</span></label>
                    </div>
                    <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                        <input type="text" name="color" required 
                        className="block w-full appearance-none focus:outline-none bg-transparent"
                        value={formState.color}
                        onChange={handleChange}
                        />
                        <label htmlFor="color" className="text-slate-500 absolute bottom-2 -z-1 duration-700">Color <span className="text-rose-600">*</span></label>
                    </div>
                    {/* <div className=" border-2 my-10 p-4 rounded focus-within:border-indigo-600"> */}
                    {error && <span className='ml-2 text-rose-600'>Something went wrong...</span>}
                    <h2 className="capitalize font-semibold text ">Choose a logo for your car</h2>
                    <div className="my-4 p-4 border-b-2">
                        <div>
                        {/* <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-600
                    hover:file:bg-indigo-100
                    hover:file:cursor-pointer
                    "/>
                        </label> */}
                       </div>
                        
                        <div className="flex flex-wrap">
                            
                            {cars.map(car =>
                            <div className="w-44" key={car.name}>
                                <input className="hidden" id={car.name} type="radio" name="image"
                                value={car.name}
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor={car.name}>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/${car.name}.png`)}/>
                                    </span>
                                    
                                </label>
                            </div>
                            ) }
                            {/* <div className="w-44">
                                <input className="hidden" id='car1' type="radio" name="image" checked
                                value='car1'
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor='car1'>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/car1.png`)}/>
                                    </span>
                                    
                                </label>
                            </div>
                            <div className="w-44">
                                <input className="hidden" id='car2' type="radio" name="image"
                                value={formState.image}
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor='car2'>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/car2.png`)}/>
                                    </span>
                                    
                                </label>
                            </div>
                            <div className="w-44">
                                <input className="hidden" id='car3' type="radio" name="image"
                                value={formState.image}
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor='car3'>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/car3.png`)}/>
                                    </span>
                                    
                                </label>
                            </div>
                            <div className="w-44">
                                <input className="hidden" id='car4' type="radio" name="image"
                                value={formState.image}
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor='car4'>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/car4.png`)}/>
                                    </span>
                                    
                                </label>
                            </div>
                            <div className="w-44">
                                <input className="hidden" id='car5' type="radio" name="image"
                                value={formState.image}
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor='car5'>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/car5.png`)}/>
                                    </span>
                                    
                                </label>
                            </div>
                            <div className="w-44">
                                <input className="hidden" id='car6' type="radio" name="image"
                                value={formState.image}
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor='car6'>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/car6.png`)}/>
                                    </span>
                                    
                                </label>
                            </div>
                            <div className="w-44">
                                <input className="hidden" id='car7' type="radio" name="image"
                                value={formState.image}
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor='car7'>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/car7.png`)}/>
                                    </span>
                                    
                                </label>
                            </div>
                            <div className="w-44">
                                <input className="hidden" id='car8' type="radio" name="image"
                                value={formState.image}
                                onChange={handleChange}
                                />
                                <label className="flex flex-col border-[3px] rounded-lg border-gray-400 cursor-pointer" htmlFor='car8'>
                                    <span className="text-xs font-semibold uppercase">
                                        <img className="rounded-md" src={require(`../../assets/images/cars/car8.png`)}/>
                                    </span>
                                    
                                </label>
                            </div> */}
                        </div>

                    </div>
                    <div className="my-6 self-end">
                        <button className="py-2 px-6 float-left text-center bg-slate-200 text-slate-500 rounded-full duration-700 hover:text-slate-600 hover:bg-slate-300"
                        onClick={()=>{
                            window.location.assign('/dashboard');
                        }}
                        >
                            Cancel</button>
                        <button type="submit"
                            className="py-2 px-6 float-right text-center text-slate-300 rounded-full duration-700 bg-indigo-500 hover:bg-indigo-600"
                        >submit</button>
                    </div>
                </form>
                
            </div>
        </div>
    )

}

export default CarForm;