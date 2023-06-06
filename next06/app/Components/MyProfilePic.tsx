import Image from "next/image";

function MyProfilePic() {
  return (
    <section w-full mx-auto>
      <Image
        className="border-4 border-black border-slate-500 
        drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/divine.jpg"
        width={100}
        height={100}
        alt="Divine Ajaegbu"
        priority={true}
      />
    </section>
  );
}

export default MyProfilePic;
