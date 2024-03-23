

export default function FAQList() {

  // JSON data for card details
  const cardData = [
    { id: 1, title: "What is No loss lottery?", content: "No loss lottery is a dApp which allows users to participate in a lottery system where there are no losers" },
    { id: 1, title: "Do you provide customer support?", content: "No loss lottery is a dApp which allows users to participate in a lottery system where there are no losers" },
    { id: 1, title: "Do you provide customer support?", content: "No loss lottery is a dApp which allows users to participate in a lottery system where there are no losers" },
    { id: 1, title: "Do you provide customer support?", content: "No loss lottery is a dApp which allows users to participate in a lottery system where there are no losers" },
    { id: 1, title: "Do you provide customer support?", content: "No loss lottery is a dApp which allows users to participate in a lottery system where there are no losers" },
    { id: 1, title: "Do you provide customer support?", content: "No loss lottery is a dApp which allows users to participate in a lottery system where there are no losers" },
    { id: 1, title: "Do you provide customer support?", content: "No loss lottery is a dApp which allows users to participate in a lottery system where there are no losers" },
    
  ];

  interface CardProps {
    id: number; 
    title: string; 
    content: string; 

}

const Card: React.FC<CardProps> = ({ id,title,content }) => {
    return (
      <div className="bg-white 2xl:w-[48.5rem] px-8 py-4 h-16  flex items-center justify-between rounded-md text-base text-black font-semibold ">
        <h1> {title} </h1>
        <button className="w-9 h-9 rounded-lg shadow-md flex items-center justify-center" > <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M16.0312 9C16.0312 9.22378 15.9424 9.43839 15.7841 9.59662C15.6259 9.75485 15.4113 9.84375 15.1875 9.84375H9.84375V15.1875C9.84375 15.4113 9.75485 15.6259 9.59662 15.7841C9.43839 15.9424 9.22378 16.0312 9 16.0312C8.77622 16.0312 8.56161 15.9424 8.40338 15.7841C8.24514 15.6259 8.15625 15.4113 8.15625 15.1875V9.84375H2.8125C2.58872 9.84375 2.37411 9.75485 2.21588 9.59662C2.05764 9.43839 1.96875 9.22378 1.96875 9C1.96875 8.77622 2.05764 8.56161 2.21588 8.40338C2.37411 8.24514 2.58872 8.15625 2.8125 8.15625H8.15625V2.8125C8.15625 2.58872 8.24514 2.37411 8.40338 2.21588C8.56161 2.05764 8.77622 1.96875 9 1.96875C9.22378 1.96875 9.43839 2.05764 9.59662 2.21588C9.75485 2.37411 9.84375 2.58872 9.84375 2.8125V8.15625H15.1875C15.4113 8.15625 15.6259 8.24514 15.7841 8.40338C15.9424 8.56161 16.0312 8.77622 16.0312 9Z" fill="#646D80" />
        </svg>
        </button>
      </div>
    )
  }

  return (

    <div className="card-container flex  font-Urbanist text-base flex-col gap-2 mt-5 ">
      {/* Mapping over JSON data to render Card components */}
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>

  )
}