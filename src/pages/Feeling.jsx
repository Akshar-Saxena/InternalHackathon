import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ResultCard from '../components/ResultCard';
export default function Feeling() {
    const analysisResults = {
        title: 'Yojna',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        result: 'Follow link', // Replace with your actual result
      };
  return (
    <div>
      <NavBar/>     
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto">
        <ResultCard
          title={analysisResults.title}
          description={analysisResults.description}
          result={analysisResults.result}
        />
      </div>
    </div>
      <Footer/>
    </div>
  )
}
