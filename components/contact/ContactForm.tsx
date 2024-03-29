"use client"
import emailjs from "@emailjs/browser"
import React, { useState } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { CgSpinnerAlt } from "react-icons/cg"
import { useForm, SubmitHandler } from "react-hook-form"
import { ZodType, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Button, { buttonStyles } from "../ui/button"

type FormTypes = {
  name: string
  email: string
  phone?: string
  message: string
}

const schema: ZodType<FormTypes> = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must contain at least 3 character(s)" })
    .max(20),
  email: z.string().email(),
  phone: z.string(),
  message: z.string().max(50).nonempty({ message: "Message is required" }),
})

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export default function ContactForm({ dictionary }: { dictionary: any }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<FormTypes> = data => {
    setIsLoading(true)
    let formData = document.createElement("form")
    formData.innerHTML = ` 
            <input name="from_name" value="${data.name}" />
            <input name="from_email" value="${data.email}" />
            <input name="from_phone" value="${data.phone}" />
            <textarea name="from_message">${data.message}</textarea>
        
        `
    emailjs.sendForm("service_b27ezi3", "template_c4rqhh1", formData, "hpeVPBIjR0dTtIqex").then(
      result => {
        setIsLoading(false)
        reset(defaultValues)
      },
      error => {
        console.log(error.text)
      }
    )
  }

  const inputStyle =
    "block w-full px-3 py-2 text-sm text-gray-700 bg-backgroundGray border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-4">
      <div className="space-y-6 text-lg mb-9">
        <div className="flex items-center justify-between">
          <div>
            <FaPhoneAlt className="inline-block mr-2 text-green-500 mb-1 text-[1.6rem]" />
            <span className="opacity-80">(999)999-9999</span>
          </div>
          <a href="tel:999-999-9999" className={buttonStyles({ size: "sm" })}>
            {dictionary.call}
          </a>
        </div>
        <div>
          <IoMdMail className="inline-block mr-2 text-3xl text-purple" />
          <span className="opacity-80">email@email.com</span>
        </div>
      </div>
      <h1 className="mb-2 text-4xl font-extrabold opacity-70 text-secondary">{dictionary.title}</h1>
      <input className={inputStyle} placeholder={`${dictionary.name}*`} {...register("name")} />
      <span className="text-red-400 text-sm">{errors.name?.message}</span>
      <input className={inputStyle} placeholder={`${dictionary.email}*`} {...register("email")} />
      <span className="text-red-400 text-sm">{errors.email?.message}</span>
      <input
        className={inputStyle}
        placeholder={`${dictionary.phone} (${dictionary.optional})`}
        {...register("phone")}
      />
      <div>
        <textarea className={inputStyle} placeholder={`${dictionary.message}*`} rows={5} {...register("message")} />
        <span className="text-red-400 text-sm">{errors.message?.message}</span>
      </div>
      <Button type="submit" mobile disabled={isLoading}>
        {isLoading && <CgSpinnerAlt className="text-xl animate-spin" />}
        {dictionary.submit}
      </Button>
    </form>
  )
}
