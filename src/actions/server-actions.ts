'use server'

import { db } from '@/db'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData){
    const title = formData.get('title') as string
    const post = formData.get('post') as string

    // Create new record in DB with user input
    const newPost = await db.post.create({
        data: {
            title: title,
            post: post,
            published: true
        }
    })

    redirect('/posts')

}

export async function deletePost(){

}

export async function editPost(){

}