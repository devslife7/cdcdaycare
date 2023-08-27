import { useForm, SubmitHandler } from "react-hook-form"
import Button from "../shared/Button"
import emailjs from "@emailjs/browser"
import React, { useState } from "react"
// import Spinner from "@/public/icons/Spinner"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { CgSpinnerAlt } from "react-icons/cg"

type FormValues = {
    name: string
    email: string
    phone: string
    message: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<FormValues> = data => {
        setIsLoading(true)
        let formData = document.createElement("form")
        formData.innerHTML = ` 
            <input name="from_name" value="${data.name}" />
            <input name="from_email" value="${data.email}" />
            <input name="from_phone" value="${data.phone}" />
            <textarea name="from_message">${data.message}</textarea>
        
        `
        console.log("formData:", formData)
        emailjs.sendForm("service_b27ezi3", "template_c4rqhh1", formData, "hpeVPBIjR0dTtIqex").then(
            result => {
                console.log(result.text)
                setIsLoading(false)
            },
            error => {
                console.log(error.text)
            }
        )
    }

    const inputSyle =
        "block w-full px-3 py-2 text-sm bg-backgroundGray border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-4">
            <div className="space-y-6 text-lg mb-9">
                <div className="flex items-center justify-between">
                    <div>
                        <FaPhoneAlt className="inline-block mr-2 text-green mb-1 text-[1.6rem]" />
                        <span className="opacity-80">(999)999-9999</span>
                    </div>
                    <a
                        href="tel:999-999-9999"
                        className="bg-green text-white border-[3px] border-solid border-transparent inline-block rounded-md px-4 py-1 text-base hover:border-solid hover:bg-transparent hover:border-[3px] hover:border-green hover:text-green transition-all ease-in-out duration-300 "
                    >
                        Call now
                    </a>
                </div>
                <div>
                    <IoMdMail className="inline-block mr-2 text-3xl text-primary" />
                    <span className="opacity-80">email@email.com</span>
                </div>
            </div>
            <h1 className="mb-2 text-4xl font-extrabold opacity-70 text-secondary">Schedule a free tour!</h1>
            <input
                className={inputSyle}
                placeholder="Name*"
                {...register("name", {
                    required: "This is required *",
                    minLength: { value: 3, message: "Min length is 3 *" },
                })}
            />
            {errors.name && <span className="text-red-400"> &nbsp;{errors.name.message}</span>}
            <input
                className={inputSyle}
                placeholder="Email*"
                type="email"
                {...register("email", {
                    required: "This is required *",
                    minLength: { value: 3, message: "Min length is 3 *" },
                })}
            />
            {errors.email && <span className="text-red-400"> &nbsp;{errors.email.message}</span>}
            <input className={inputSyle} placeholder="Phone (optional)" {...register("phone")} />
            <textarea
                className={inputSyle}
                placeholder="Message*"
                rows={5}
                {...register("message", {
                    required: "This is required *",
                    minLength: { value: 3, message: "Min length is 3 *" },
                })}
            />
            {errors.message && <span className="text-red-400"> &nbsp;{errors.message.message}</span>}

            <div>
                <Button type="submit">
                    {/* {true && <Spinner className="mr-2" />} */}
                    <CgSpinnerAlt className="mr-2 text-xl animate-spin" />
                    Send Message
                </Button>
            </div>
        </form>
    )
}
