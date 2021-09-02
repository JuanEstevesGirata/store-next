import Layout from "@components/Layout";

//import { useState, useEffect } from "react"





const HomePage = () => {
//     const [product, setProduct] = useState([])

//     useEffect(() => {
//         fetch('/api/app')
//         .then(response => response.json())
//         .then(({ data }) => {
//             setProduct(data)
//           })
        
//     }, [])

    return (
        <div>
           <Layout/>                    
        </div>
    )
}

export default HomePage


// export async function getServerSideProps() {
    
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }