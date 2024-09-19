import React from 'react'
import Skill from "../component/Skill"
export default function skill() {
  return (
    <section className='h-screen w-screen bg-black'>
      <Skill />
    </section>
  )
}
export function generateMetadata({ data }) {
  return {
    title:"Nabin | Skill",
    description:"Get all your movies and show on herne",
  };

}