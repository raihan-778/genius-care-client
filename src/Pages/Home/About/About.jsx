import React from "react"
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <div className="hero  my-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="max-w-sm w-4/5 h-full rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="max-w-sm h-full right-5 border-8 top-1/2 w-3/5 absolute rounded-lg shadow-2xl"
          />
        </div>

        <div className="w-1/2 my-5">
          <p className="text-2xl text-orange-600 font-bold">About Us</p>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default About
