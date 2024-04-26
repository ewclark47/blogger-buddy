import { db } from "@/db";
import { notFound } from "next/navigation";

interface PostEditPageProps{
    params:{
        id: string
    }
}

export default async function PostEditPage(props: PostEditPageProps){

    const id = parseInt(props.params.id)

    const post = await db.post.findFirst({
        where: { id: id }
    })

    if(!post){
        return notFound()
    }

    return(
        <div>
            Post Edit Form Goes Here Once Complete
        </div>
    )
}