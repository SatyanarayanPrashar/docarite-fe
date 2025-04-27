import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex px-28 items-center">
      <div className="flex flex-col w-1/2">
        <h1 className="font-light leading-none text-6xl">Docarite</h1>
        {/* <p className="text-xl">Documentation, Done Right.</p> */}
        <p className="font-light text-3xl">Automated Documentation generation and maintainance</p>
      </div>
      <div className="flex w-1/2 h-1/2 justify-center">
        <Image
          className=""
          src="/logo_no_name.png"
          alt="Next.js logo"
          width={450}
          height={70}
          priority
        />
      </div>
    </div>
  );
}
