import React from 'react'
import About from "../component/About"
export default function about() {
  return (
   <section>
    <About />
   </section>
  )
}
export function generateMetadata({ data }) {
  return {
    title:"About Nabin",
    description:"Get all your movies and show on herne",
  };

}