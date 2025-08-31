
/*import { useState, useEffect } from "react";

export function usePostTitle() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post.title;
}*/








import { useState, useEffect } from "react";

export function useFetch(url){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(()=>{
        getDetails();
    }, [url]);

    // This effect ensures that we are re-fetching data for every 10 seconds from backend.
    useEffect(()=>{
      let IntervalId = setInterval(()=>{
        getDetails();
      },10000);

      //cleanup
      return ()=>{
        clearInterval(IntervalId);
      }
    },[url]);

    return {
        finalData,
        loading
    };
}
