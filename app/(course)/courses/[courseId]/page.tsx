import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}


// import { db } from "@/lib/db";
// import { redirect } from "next/navigation";

// const CourseIdPage = async ({
//   params
// }: {
//   params: { courseId: string; }
// }) => {
//   const course = await db.course.findUnique({
//     where: {
//       id: params.courseId,
//     },
//     include: {
//       chapters: {
//         where: {
//           isPublished: true,
//         },
//         orderBy: {
//           position: "asc"
//         }
//       }
//     }
//   });

//   if (!course) {
//     return redirect("/");
//   }

//   return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);
// }
 
// export default CourseIdPage;