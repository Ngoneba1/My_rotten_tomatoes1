import Head from "next/head";
import Image from "next/image";

function Login () {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-[black] md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title> My rotten tomatoes </title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
  src="https://external-preview.redd.it/B6MrrY-dyD1lnvvrb2BCISx1xQwGx-e7pjm-qeXwAkE.jpg?auto=webp&s=ade83a5a759042ffed5324e5172c9a59a27aaaa9"
  width={1920}
  height={1920}
  className="-z-300 opacity-100 sm:!inline"
  objectFit="cover" 
  alt=""
  priority // Add this property to prioritize the image
/>



     

    </div>
  );
}

export default Login;
