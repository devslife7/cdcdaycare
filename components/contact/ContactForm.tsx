import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    example: string
    exampleRequired: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

    return (
        <div>
            <form>
                <input {...register("example", { required: true })} placeholder="Name" />
                <input type="submit" />
            </form>
        </div>
    )

    // console.log("hello", watch("example")) // watch input value by passing the name of it
    // return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         <input {...register("firstName")} />
    //         <select {...register("gender")}>
    //             <option value="female">female</option>
    //             <option value="male">male</option>
    //             <option value="other">other</option>
    //         </select>
    //         <input type="submit" />
    //     </form>
    // )
}
