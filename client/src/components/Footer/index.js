import React from "react";

const Footer = ()=>{
    return (
        <footer className="text-center md:text-base text-xs bg-gray-800 text-slate-500">


            <div className="text-center p-4 slate-900 " >
                © 2022  <a className="hover:text-slate-400" href="/">CarDash</a>  - Made by :{' '} 
                <a className="hover:text-slate-400" href="https://github.com/khaoulaja/">Khaoula Jabour</a>,{' '} 
                <a className="hover:text-slate-400" href="https://github.com/Rfields03">Robert Field</a> and {' '} 
                <a className="hover:text-slate-400" href="https://github.com/javarrisb">Javarris Barnett</a>
               
            </div>
        </footer>
    )
}

export default Footer;