const tableBody  = document.getElementById('table-body')

let flights = [
    {
        time: "08:00",
        destination: "DHAKA",
        flight: "OX 344",
        gate: "A 04",
        remarks: "ON TIME"
    },
    {
        time: "10:30",
        destination: "BERLIN",
        flight: "AW 448",
        gate: "B 01",
        remarks: "CANCELLED"
    },
    {
        time: "13:30",
        destination: "LONDON",
        flight: "GI 974",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "16:00",
        destination: "DUBAI",
        flight: "FJ 853",
        gate: "D 02",
        remarks: "CANCELLED"
    },
    {
        time: "18:30",
        destination: "TOKYO",
        flight: "DJ 524",
        gate: "A 04",
        remarks: "DELAYED"
    }
]

function populateTable(){
    for(const flight of flights){
        const tableRow = document.createElement("tr")

        for(const flightDetail in flight){
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])

            for(const [index,letter] of word.entries()){
                const letterElement = document.createElement('div')
                
                setTimeout(() =>{
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement) 
                }, 100*index)
            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}

populateTable()