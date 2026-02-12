import Image from "next/image";

interface HeaderImageProps {
    src: string;
    alt: string;
    title: string;
    subtitle?: string;
    className?: string;
}

export default function HeaderImage({
    src,
    alt, 
    title,
    subtitle,
    className = "",
}: HeaderImageProps) {
    return (
        <div className={`relative w-full h-[33vh] sm:h-[60vh] ms:h-[30vh] overflow-hidden ${className}`}>
            <Image 
                src={src}
                alt={alt}
                fill
                className="object-cover w-full h-full"
                priority
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col text-[#ded6eb] p-8">
                            <h1 className="text-3xl sm:text-4xl md:text-9xl font-bold tracking-[-.4rem]">{title}</h1>
        {subtitle && <p className="text-sm sm:text-base md:text-lg mt-2">{subtitle}</p>}
                </div>
        </div>
    )
}