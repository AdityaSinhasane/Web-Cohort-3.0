
export default async function TodoPage({params}: {
    params: Promise<{
        todoId: string
    }>
}){

    const todoId = (await params).todoId;
   

    return <div>
        hi there <br/>
        Todo Page {JSON.stringify(todoId)}
        <br/>
        Hello   
    </div>
}