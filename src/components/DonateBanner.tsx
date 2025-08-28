import React from 'react'

const DonateBanner = () => {
    return (
        // <section>
        //     <h1>Sustain the Arts</h1>
        //     <p>Support Opera Today. Inspire Audiences Tomorrow.</p>
        //     <button>
        //         Become A Patron
        //     </button>
        // </section>

        <div className="relative w-full h-75">
            {/* Background */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Teal */}
                <polygon points="0,0 100,0 100,100 45,100" fill="#1f8ab3" />
                {/* Cream */}
                <polygon points="0,0 55,0 45,100 0,100" fill="#fdf8f3" />
            </svg>

            {/* Text Content */}
            <div className="relative z-10 p-10">
                <h2 className="text-2xl font-bold text-gray-800">Sustain the Arts 🎵</h2>
                <p className="mt-4 text-xl text-purple-800">
                    Support Opera Today. Inspire Audiences Tomorrow
                </p>
                <button className="mt-6 inline-flex items-center rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">
                    Become a Patron →
                </button>
            </div>
        </div>

    )
}

export default DonateBanner