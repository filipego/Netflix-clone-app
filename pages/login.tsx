import { signInWithPopup, signOut } from "firebase/auth";
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from '../hooks/useAuth'

interface Inputs {
    email: string
    password: string
}

function Login() {
    const [login, setLogin] = useState(false)
    const { signIn, signUp } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        if (login) {
            await signIn(email, password)
        } else {
            await signUp(email, password)
        }
    }

    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:bg-transparent md:items-center md:justify-center">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image
                src="https://ik.imagekit.io/ec3987k0v/Playground_Files/Netflix_clone_app/Netflix_Login_bg_ijXLs--45.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1655067175623"
                layout="fill"
                className="-z-10 !hidden opacity-60 sm:!inline"
                objectFit="cover"
            />
            <div className="absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4 pt-4 pl-4">
                <Image src="https://ik.imagekit.io/ec3987k0v/Playground_Files/Netflix_clone_app/Netflix_logo_p-_VyWjAg.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1654978115730"
                    width={100}
                    height={27}
                    className="cursor-pointer object-contain" />
            </div>

            <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-4xl font-semibold">Sign In</h1>
                <div className="space-y-4">
                    <label className="inline-block w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <p className="text-sm  text-orange-500">
                                Please enter a valid email.
                            </p>
                        )}
                    </label>
                    <label className="inline-block w-full">
                        <input
                            type="password"
                            {...register('password', { required: true })}
                            placeholder="Password"
                            className="input"
                        />
                        {errors.password && (
                            <p className="text-sm  text-orange-500">
                                Your password must contain between 4 and 60 characters.
                            </p>
                        )}
                    </label>
                </div>
                <button
                    className="w-full rounded bg-[#E50914] py-3 font-semibold"
                    type="submit"
                    onClick={() => setLogin(true)}
                >
                    Sign In
                </button>
                <div className="text-[gray]">
                    New To Netflix?{' '}
                    <button
                        className="cursor-pointer text-white hover:underline"
                        onClick={() => setLogin(false)}
                    >
                        Sign up now</button>
                </div>
            </form >
        </div >
    )
}

export default Login