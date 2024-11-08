import Image from "next/image";

export const CustomCard = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex items-center justify-center h-40 w-full rounded-xl bg-black-100 text-white shadow-lg transform transition duration-300 hover:scale-110 hover:-translate-y-2">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={imageSrc} 
          alt={`${title} logo`} 
          width={64}  
          height={64} 
          className="rounded" 
        />
        <span className="font-semibold">{title}</span>
      </div>
    </div>
  );
};