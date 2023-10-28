import React from 'react'
import Card from './Card';
import {Link} from 'react-router-dom'
const useCases = [
    {
      title: "Personal Finance",
      description: "Learn how to manage your finances effectively.",
      route: '/personal-finance',
    },
    {
      title: "Peer-to-Peer Lending",
      description: "Discover opportunities for P2P lending.",
      route: '/peer-to-peer-lending',
    },
    // {
    //   title: "Asset Tokenization",
    //   description: "Unlock the benefits of asset tokenization.",
    // },
    {
      title: "Agent Locator",
      description: "Find local financial advisors and agents.",
      route:'/geolocator',
    },
    {
      title: "Artificial Intelligence",
      description: "Leverage AI for financial insights and recommendations.",
      route: "/ai-insights",
    },
  ];
  
const Cases = () => {
  return (
    <div className="bg-fuchsia-900 py-8 text-center w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl text-white font-semibold text-center mb-8">Explore Financial Problem Cases</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {useCases.map((useCase, index) => (
            <Link to={useCase.route} key={index}>
            <Card title={useCase.title} description={useCase.description} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cases