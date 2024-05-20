export default async function Page() {
  return <div>Hello World</div>
}
// import { Image } from '@nextui-org/react'
// import { FaFacebookF } from 'react-icons/fa6'

// import Link from 'next/link'

// export default async function Page() {
//   const response = await fetch(`${process.env.CLIENT_URL}/api/facebook`)
//   const data = await response.json()

//   return (
//     <div className="flex flex-wrap mx-2">
//       {data.data.data.map(
//         (
//           post: {
//             message: string
//             full_picture: string
//             permalink_url: string
//           },
//           index: number,
//         ) => (
//           <Link
//             href={post.permalink_url}
//             key={index}
//             target="_blank"
//             className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/8"
//           >
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-blue-500 border-2 hover:bg-gray-100 hover:border-blue-600 hover:border-1">
//               <div className="px-4 pt-2">
//                 <div
//                   className="w-16 h-16"
//                   style={{
//                     clipPath: 'polygon(0 0, 100% 0, 0% 100%)',
//                     backgroundColor: '#4267B2',
//                   }}
//                 >
//                   <FaFacebookF className="text-white pt-2" size={32} />
//                 </div>
//               </div>
//               <div className="p-2">
//                 <Image
//                   alt="Card background"
//                   className="object-cover rounded-xl w-full"
//                   src={post.full_picture}
//                 />
//               </div>
//               <div className="px-4 py-2">
//                 <p>
//                   {post.message.length > 150
//                     ? post.message.substring(0, 150) + '...'
//                     : post.message}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ),
//       )}
//     </div>
//   )
// }
