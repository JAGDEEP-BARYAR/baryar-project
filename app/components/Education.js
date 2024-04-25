import React from 'react';

export default function Education() {
    return (
        <div id="education" className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-mono text-center mt-10 text-black-500 font-bold">Education</h1>

            {/* First Education Entry */}
            <div className="education-entry flex flex-row justify-start max-w-[60%] mt-10">
                <div className="w-1/4 font-mono text-lg pr-1 text-black-400">
                    <strong>2023 - Present</strong>
                </div>
                <div className="w-3/4 font-mono text-lg pr-1 text-black-400">
                    Software Development in Engineering
                    Sothern Alberta Institute of Technology (SAIT) 
                    Learned Programming Languages Like Java, C#, SQL, and JavaScript, a style sheet language CSS, and one markup language HTML. Collaborated with peers to complete projects and assignments. Explained difficult concepts of major subjects like Accounting, Web Development, Programming 1 & 2, Database management, and Object-Oriented Analysis to my peers. Maintained a GPA of 4.5/4.5 in term 1 by managing to finish work before due dates.
                </div>
            </div>

            {/* Second Education Entry */}
            <div className="education-entry flex flex-row justify-start max-w-[60%] mt-10">
                <div className="w-1/4 font-mono text-lg pr-1 text-black-400">
                    <strong>2021-2022</strong>
                </div>
                <div className="w-3/4 font-mono text-lg pr-1 text-black-400">
                    Basic Cs, Telly Courses
                    Learned detailed knowledge of MS Word, MS Excel, and MS PowerPoint. Secured an A+ grade and got the certificate of completion of Computer Basics. As a student in science, performed well and attained the knowledge of accounting terms.Learned about basic to advanced accounting entries. Got the certificate with an A+ grade on the exam of accounting.
                </div>
            </div>

            {/* Third Education Entry */}
            <div className="education-entry flex flex-row justify-start max-w-[60%] mt-10">
                <div className="w-1/4 font-mono text-lg pr-1 text-black-400">
                    <strong>2019-2021</strong>
                </div>
                <div className="w-3/4 font-mono text-lg pr-1 text-black-400">
                    Secondary Education
                    Managed to have an overall grade of A and in subjects like Physics, Chemistry, Mathematics. Helped my classmates in getting derivations of Physics. Organized school events with other students. Delivered speeches on special occasions.
                </div>
            </div>

            {/* Fourth Education Entry */}
            <div className="education-entry flex flex-row justify-start max-w-[60%] mt-10">
                <div className="w-1/4 font-mono text-lg pr-1 text-black-400">
                    <strong>2018-2019</strong>
                </div>
                <div className="w-3/4 font-mono text-lg pr-1 text-black-400">
                    High School
                    Managed to have an A grade. Nominated as Best Actor thrice by working in some religious plays. Got rewarded for beautiful handwriting several times, mostly for Punjabi. Rewarded with first prize for authoring an essay on the spot about wastage, depletion, and solutions to save natural resources.Participated in sports as a sixth-grade student and got third prize in a marathon of 200 meters against students in 8th grade. Took part in painting competitions, and quiz competitions and usually won the first prize.
                </div>
            </div>
        </div>
    );
}
