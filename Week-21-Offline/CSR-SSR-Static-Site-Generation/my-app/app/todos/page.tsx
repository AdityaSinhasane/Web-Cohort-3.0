type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
    next:{
        revalidate:10
    }
  });
  const data: Todo[] = await response.json();

  console.log("data found from the backend server is");
  console.log(JSON.stringify(data));

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <br />
          {todo.completed ? "Completed" : "Not Completed"}
        </div>
      ))}
    </div>
  );
}
