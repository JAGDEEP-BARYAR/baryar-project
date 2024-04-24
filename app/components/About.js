import React from 'react';
export default function About() {
    return (

        <div id="about">
            <h1 className="text-4xl font-mono text-center mt-60 text-pink-500 font-bold">JAGDEEP BARYAR</h1>
            <div className="flex flex-row mx-auto max-w-[60%] mt-10 justify-center">
                <p className="w-25vw w-1/2 font-mono text-lg pr-1 text-black-400">
                    I am an enthusiastic software and web application developer committed to crafting meaningful digital solutions. My expertise lies in coding and inventive problem-solving.
                    Fueled by my passion for innovation and relentless pursuit of knowledge, I excel in team settings where I can bring forth new ideas and collaborate closely to achieve outstanding outcomes. I am eager to engage with opportunities that enable me to leverage my skills and make a positive impact through technology.
                    Let us connect and discover how we can collaborate to drive meaningful change through our work!
                </p>
                <img src="Pictures/ProfileImage.png" alt="Profile" className="w-64 h-64 pl-1"  style={{height: '450px', width:'400px'}}/>
        </div>
        </div>
    );
}
