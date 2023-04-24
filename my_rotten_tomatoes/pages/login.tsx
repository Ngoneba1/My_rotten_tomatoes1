import useAuth from "@/hooks/useAuth";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string
  password: string
}

export default function Login() {
  const [login, setLogin] = useState(false)
  const {signIn, signUp} = useAuth()

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async({email, password}) => {
    if (login) {
        await signIn(email, password)
    }   else {
              signUp(email,password)
    }

  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-[black] md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title> My rotten tomatoes </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
  src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
  alt="Netflix Image"
  fill
  style={{objectFit:"cover"}}
  className="relative h-full opacity-60 sm:!inline"
/>

        <img
          src="https://images.fandango.com/cms/assets/bf631b80-bf47-11ed-a868-adceb8892ad3--rt25-logo-mainnav-322x100.png"
          width={250}
          height={250}
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        />

        <form 
         onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-[black] py-12 px-6 md:max-w-md md:px-10">
          <h1 className="text-4xl font-semibold text-[white]"> Sign In</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
              type="email" 
              placeholder="Email" 
              className="input" 
              {...register("email", {required: true })}
              />

              {errors.email && <p className="p-1 text -[13px] font-light text-[orange]">Please enter a valid email.</p>}
        
              
            </label>
            <label className="inline-block w-full">
              {" "}
              Password
              <input
              type="password"
               placeholder="Password" 
               className="input" 
               {...register("password", {required: true })}
               />
               {errors.password && <p className="p-1 text -[13px] font-light text-[orange]">Your password must contain between 4 and 60 characters.</p>}
            </label>
          </div>

          <button className="w-full rounded bg-[#e50914] py-3 font-semibold text-[white]" onClick={()=> setLogin(true)}>
            Sign In
          </button>

          <div className="text-[gray]">
            New to Rotten Potatoes ?{" "}
            <button type="submit" 
            className="text-[white] hover:underline"
            onClick={() => setLogin(false)}
            >
              Sign Up now
            </button>
          </div>
        </form>
    </div>
  );
}
