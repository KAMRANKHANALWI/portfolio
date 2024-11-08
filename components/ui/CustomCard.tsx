// export const CustomCard = ({
//     title,
//     imageSrc,
//   }: {
//     title: string;
//     imageSrc: string;
//   }) => {
//     return (
//       <div className="flex items-center justify-center h-40 w-full rounded-xl bg-black-100 text-white transition duration-300 hover:bg-white hover:text-black shadow-lg">
//       {/* // <div className="flex items-center justify-center h-40 w-full rounded-xl bg-[#e1e8ed] text-black transition duration-300 hover:bg-black-100 hover:text-white shadow-lg">  */}
//         <div className="flex flex-col items-center gap-4">
//           <img src={imageSrc} alt={`${title} logo`} className="h-16 w-16" />
//           <span className="font-semibold">{title}</span>
//         </div>
//       </div>
//     );
//   };

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
        <img src={imageSrc} alt={`${title} logo`} className="h-16 w-16" />
        <span className="font-semibold">{title}</span>
      </div>
    </div>
  );
};