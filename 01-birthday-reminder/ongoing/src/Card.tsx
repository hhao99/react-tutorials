export default  ({person})=> {
    return (
        <>
            <div className="bg-white hover:bg-blue-100 border border-gray-300 shadow-2xl rounded-3xl m-2 p-4 ">
                <div className="flex flex-1">
                <img 
                    className='w-16 h-16 rounded-full mx-4 object-cover'
                src={person.image} alt="person"  />
                <div>
                    <h3 className="text-2xl text-gray-800">{person.name}</h3>
                    <p className="text-gray-500">{person.age} years.</p>
                </div>
                </div>
               
            </div>
        </>
    )
}