import Image from "next/image"
import ChoclateLassi from "@/public/Choclate-Lassi.jpg"

const page = () => {
  return (
    <div>
      <Image src={ChoclateLassi} alt="Chocolate Lassi" width={200} height={150} />
      <h1 className="text-4xl font-bold">My name is Shaurya, Mere Papa kal aarhe hai</h1>
    </div>
  )
}

export default page