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
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover" alt={""}      />

<img src="https://images.fandango.com/cms/assets/bf631b80-bf47-11ed-a868-adceb8892ad3--rt25-logo-mainnav-322x100.png" 
                width={250}
                height={250}
              className=" absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                />

            <form className="relative mt-24 space-y-8 rounded bg-[black] py-10 px-6 md:mt-0
            md:max-w-md md:px-14">
              <h1> Sign In</h1>
              <div className="space-y-4">
                <label>
                  <input type="email" placeholder="Email" />
                   </label>
                <label> Password </label>
                <input type="password" placeholder="Password" />
              </div>

            </form>
       </div>
  );
}

export default Login;
