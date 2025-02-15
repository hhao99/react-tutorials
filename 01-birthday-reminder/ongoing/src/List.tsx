import Card from './Card';
export default ({data})=> {
    return (
        <div className="bg-red-300 w-1/4 h-1/4 flex flex-col items-center justify-center p-4">
            <h1>There are {data.length} birthday reminders.</h1>
            <ul>
               { data && data.map( (person, index) =>{ 
                return (
                    <li key={index}>
                        <Card person={person} />
                    </li>
                )
               }) }
            </ul>
            <button class="bg-red-200 w-3/4 h-16 border-1 border-red-200 rounded-lg shadow-lg items-center"> View All</button>
        </div>
    )
}