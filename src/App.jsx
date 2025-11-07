import "./index.css"
import Navbar from "./components/Navbar.jsx"
import Entry from "./components/Entry.jsx"
import EntryData from "./components/EntryData.js"


export default function App(){
      const EntryElements = EntryData.map((entry) => {
      return <Entry 
          key={entry.id}
          {...entry}
      />
    })
  return (
    <>
    {/* method 1 */}
      <Navbar/>
      <main className="container">
        {/* <Entry
        img={{
          src:nelligala,
          alt:"Nelligala"
        }}
        location="Yatinuwera"
        link="https://share.google/bXnLNqvFGn4ffY92e"
        name="Nelligala International Buddist Centre"
        visited="visited on 6,August,2025 "
        about="Nelligala International Buddhist Centre is a sacred institution serving both local and international communities. Located in Yatinuwara, Kandy, this breathtaking natural site offers panoramic views of the Central Highlands."
        about2="Officially opened on November 9, 2014, It features the majestic Shakya Singha Maha Seya, enshrining sacred relics, and the largest sermon hall in Yatinuwara. Additionally, meditation huts support monastic practices, making Nelligala a center for spiritual growth and devotion."
        /> */}

        {/* Easy method */}
        {EntryElements}
        
      </main>
    </>
  )
}