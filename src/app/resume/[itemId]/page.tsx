interface ResumeProps {
    params: {
        itemId: number,
    }
}

export default async function Resume({ params } : ResumeProps) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.itemId}`)
    const post = await response.json()
    console.log('response')

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}