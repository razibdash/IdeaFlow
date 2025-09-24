import Banner from "@/components/ui/Banner";
import { connectDB } from "@/lib/mongodb";
import ArticleModel from "@/models/Article";
import Image from "next/image";

export default async function Home () {
   await connectDB()
   const article=await ArticleModel.find().lean()
  //  console.log(article)
  return (
    <div>
      <Banner />
    </div>
  );
}
