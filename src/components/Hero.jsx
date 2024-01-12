import heroBg from "../assets/images/hero.jpg";
export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Image */}
      <div className="absolute w-full h-screen">
        <img
          src={heroBg}
          className="object-cover object-center h-screen w-full"
        />
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* h2 & p  */}
      <div className="absolute inset-2 left-4 md:inset-0 flex flex-1 flex-col justify-center items-center">
        <h2 className="text-white text-[80px]">مصر للتأمين الصحي</h2>
        <p className="text-slate-300 text-[40px]">
          أعظم الثروة هي الصحة، والحياة مع التأمين يخلق ثروة عظيمة
        </p>
      </div>
    </section>
  );
}
