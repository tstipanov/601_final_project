const properties = [
    	{
		name: "Joe Mann",
		potential_revenue: ["2,049,514", "2,572,762", "3,443,882", "3,544,539", "3,650,875", "3,760,401", "3,873,213", "3,989,410", "4,116,693", "4,308,587", "4,417,012", "4,549,523", "4,686,008", "4,826,589", "4,971,386", "5,120,528", "5,287,973"],
		captured_rent: ["2,049,514", "1,413,933", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		future_rent: ["0", "394,658", "3,355,208", "3,544,539", "3,650,875", "3,760,401", "3,873,213", "3,989,410", "3,631,313", "3,731,441", "4,417,012", "4,549,523", "4,686,008", "4,826,589", "4,971,386", "5,120,528", "3,963,292"],
		lost_rent: ["764,171", "88,674", "0", "0", "0", "0", "0", "485,380", "577,146" "0", "0", "0", "0", "0", "0", "1,324,681"],
		concession: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		total_rent: ['2,049,514', '1,808,591', '3,355,208', '3,544,539', '3,650,875', '3,760,401', '3,873,213', '3,989,410', '3,631,313', '3,731,441', '4,417,012', '4,549,523', '4,686,008', '4,826,589', '4,971,386', '5,120,528', '3,963,292'],
		utilities: ['871,990', '676,980', '886,695', '1,025,809', '1,096,260', '1,129,148', '1,163,023', '1,197,914', '1,088,368', '1,083,008', '1,272,134', '1,333,574', '1,386,478', '1,428,072', '1,470,915', '1,513,058', '1,171,110'],
		
		
		
	}
    	{
		name: "Amy Bloggs",
		released: "2020-03-27 EST",
		story: "A southwest Georgia hospital that's reporting about a quarter of the state's coronavirus deaths says it has reached capacity in three intensive-care units. The ICUs within Phoebe Putney Memorial Hospital in Albany are filled with \"critically ill Covid-19 patients,\" Phoebe Putney Health System said in a news release Wednesday. A fourth ICU was previously opened to care for patients not infected with the virus. The system has four medical centers in Albany, Americus and Sylvester, as well as other facilities, but Phoebe Putney Memorial Hospital is facing the worst of the pandemic. Of Georgia's 47 deaths from coronavirus, 12 patients had died at the Albany facility as of Wednesday afternoon, according to the hospital system. \"As this public health crisis in southwest Georgia gets more severe, we have been reaching out to other hospitals in our part of the state,\" the system's CEO, Scott Steiner, said. \"I am pleased that every one of our regional partners we spoke to in the last 24 hours agreed to assist by accepting patient transfers from us.\""
	},
	{
		name: "Associated Press",
		released: "2020-04-05 EST",
		story: "Washington (CNN) The Senate's historic $2 trillion stimulus package is set for debate on the House floor Friday. The chamber will convene at 9 a.m. to consider the largest emergency aid package in US history in response to the coronavirus outbreak and its economic fallout, following a remarkable 96-0 Senate vote late Wednesday. House Speaker Nancy Pelosi -- who turns 80 today -- has said she would prefer that the Senate measure is adopted by unanimous consent, which would spare members who are isolating or at risk from having to travel back to Washington. But Democratic Rep. Alexandria Ocasio-Cortez, the New York freshman, is leaving open the option of objecting, potentially forcing House members to return and delaying a vote. Pelosi, however, told reporters that won't happen. \"We will be passing the bill tomorrow,\" she said today, CNN\'s Haley Byrd and Clare Foran report. $250 billion set aside for direct payments to individuals and families, $350 billion in small business loans and $250 billion in unemployment insurance benefits. A major amount of funding for hard-hit hospitals -- $130 billion -- as well as $150 billion for state and local governments that are cash-strapped due to their response to coronavirus. A $500 billion fund for Treasury to provide loans and support for distressed industries. That includes $25 billion for passenger air carriers, $4 billion for cargo air carriers and $17 billion for businesses that work in national security. The rest of the funds, $454 billion, can be spent as loans to businesses, states and municipalities."
	},	
	{
		name: "Associated Press",
		released: "2020-04-09 EST",
		story: "Hundreds of protesters, waving flags and banners from their cars, drove from Tel Aviv to Jerusalem Thursday to rally against Edelstein\'s move. Police attempted to stop the convoy as it drove along the highway, claiming they were driving slowly and causing violations. After a temporary delay, protesters succeeded in making it past the police roadblock to eventually gather outside the High Court and the Knesset. Along with Israeli flags, they waved black flags to symbolize the death of democracy. One person held a banner bearing the words in English, \"Crime Minister.\" Critics have accused Edelstein of acting in defiance of the public will. They point to the timing of a tweet he made on Sunday, just moments after President Rivlin tasked Gantz with trying to form a new government...."
    	}
];


function findPropertiesByName(name) {
    let results = [];
    if (name === null) {
        return results;
    }
    properties.forEach(property => {
        if (property.name.toLowerCase().includes(name.toLowerCase())) {
            results.push(property);
        }
    });
    return results;
}



export {findPropertiesByName};
