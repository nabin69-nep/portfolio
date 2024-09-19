import React from 'react'
import Portfolio from  "../component/Portfolio"
export default function portfolio() {
  return (
  <section className=''>
    <Portfolio />
  </section>
  )
}
export function generateMetadata({ data }) {
  return {
    title:"Nabin | Portfolio",
    description:"Get all your movies and show on herne",
  };

}