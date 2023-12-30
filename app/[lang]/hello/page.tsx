import { getDictionary } from "@/app/dictionaries"

export default async function Main({ params }: any) {
  const dict = await getDictionary(params.lang)
  return (
    <div>
      <div className="flex justify-center h-screen items-center text-5xl">Hello</div>
    </div>
  )
}
