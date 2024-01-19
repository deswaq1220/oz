

interface Api<T> {
  fetchData(endPoint:string) : Promise<T>
}

class ApiHandler<T> implements Api<T> {

  private baseUrl:string;
  constructor(baseUrl:string){
    this.baseUrl = baseUrl;
  }

  async fetchData(endPoint: string): Promise<T> {
        try {
          const url = this.baseUrl + endPoint;
          const response = await fetch(url);
          if(!response.ok){
            throw new Error(`${response.status}`)
          }
          const data:T = await response.json();

          return data;
        } catch (error) {
          throw new Error(`에러 ${error}`)
        }
  }
}

type Post = {
  id:number;
  userId: number;
  title: string;
  body: string;
}
async function main() {
  const baseUrl ="https://jsonplaceholder.typicode.com"
  const apiHandler = new ApiHandler<Post[]>(baseUrl)

  try {
    const posts: Post[] = await apiHandler.fetchData("/posts")
    posts.forEach((post) => console.log(post))
  } catch (error) {
    console.error(error)
  }
}

main();