const properties = [
    	{
		name: "Joe Mann",
		potential_revenue: ["2,049,514", "2,572,762", "3,443,882", "3,544,539", "3,650,875", "3,760,401", "3,873,213", "3,989,410", "4,116,693", "4,308,587", "4,417,012", "4,549,523", "4,686,008", "4,826,589", "4,971,386", "5,120,528", "5,287,973"],
		captured_rent: ["2,049,514", "1,413,933", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		future_rent: ["0", "394,658", "3,355,208", "3,544,539", "3,650,875", "3,760,401", "3,873,213", "3,989,410", "3,631,313", "3,731,441", "4,417,012", "4,549,523", "4,686,008", "4,826,589", "4,971,386", "5,120,528", "3,963,292"],
		lost_rent: ["764,171", "88,674", "0", "0", "0", "0", "0", "0", "485,380", "577,146", "0", "0", "0", "0", "0", "0", "1,324,681"],
		concession: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		total_rent: ['2,049,514', '1,808,591', '3,355,208', '3,544,539', '3,650,875', '3,760,401', '3,873,213', '3,989,410', '3,631,313', '3,731,441', '4,417,012', '4,549,523', '4,686,008', '4,826,589', '4,971,386', '5,120,528', '3,963,292'],
		utilities: ['871,990', '676,980', '886,695', '1,025,809', '1,096,260', '1,129,148', '1,163,023', '1,197,914', '1,088,368', '1,083,008', '1,272,134', '1,333,574', '1,386,478', '1,428,072', '1,470,915', '1,513,058', '1,171,110'],
		misc_income: ['69,220', '63,452', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],	
		all_revenue: ['2,990,724', '2,549,023', '4,241,903', '4,570,347', '4,747,135', '4,889,549', '5,036,236', '5,187,323', '4,719,680', '4,814,449', '5,689,146', '5,883,096', '6,072,487', '6,254,661', '6,442,301', '6,633,586', '5,134,402'],
		bad_debts: ['29,907', '19,327', '39,697', '45,703', '47,471', ' 48,895', '50,362', '51,873', '43,376', '35,944', '56,891', '58,831', '60,725', '62,547', '64,423', '66,336', '32,295'],
		likely_revenue: ['2,960,817', '2,529,696', '4,202,206', '4,524,644', '4,699,664', '4,840,653', '4,985,873', '5,135,450', '4,676,305', '4,778,505', '5,632,255', '5,824,265', '6,011,762', '6,192,115', '6,377,878', '6,567,250', '5,102,106'],
		expenses: ['770,612', '769,088', '755,110', '934,576', '962,612', '991,491', '1,021,236', '1,051,873', '1,083,429', '1,100,504', '1,098,074', '1,181,990', '1,217,449', '1,253,973', '1,291,592', '1,330,340', '1,362,409'],
		net_income: ['2,190,205', '1,760,608', '3,447,096', '3,590,068', '3,737,051', '3,849,163', '3,964,637', '4,083,576', '3,592,876', '3,678,001', '4,534,181', '4,642,275', '4,794,312', '4,938,141', '5,086,286', '5,236,910', '3,739,697'],
		general_upgrades: ['29,000', '1,268,633', '13,657,159', '31,689', '32,640', '33,619', '34,628', '35,666', '36,736', '37,838', '38,974', '40,143', '41,347', '42,587', '43,865', '45,181', '46,536'],
		space_upgrades: ["0", "106,558", "47,884", "0", "0", "0", "0", "0", "0", "193,876", "0", "0", "0", "0", "0", "0", "238,443"],
		leasing: ["0", '1,043,736', '469,027', "0", "0", "0", "0", "0", "0", "1,899,017", "0", "0", "0", "0", "0", "0", "2,335,561"],
	 	capital: ['29,000', '2,418,926', '14,174,070', '31,689', '32,640', '33,619', '34,628', '35,666', '36,736', '2,130,731', '38,974', '40,143', '41,347', '42,587', '43,865', '45,181', '2,620,540'],
		cash_flows: ['2,161,205', '-658,318', '-10,726,974', '3,558,379', '3,704,411', '3,815,544', '3,930,010', '4,047,910', '3,556,139', '1,547,270', '4,495,207', '4,602,132', '4,752,965', '4,895,554', '5,042,421', '5,191,729', '1,119,157'],
		ownership_cash_flows: ['2,161,205', '-658,318', '-10,726,974', '3,558,379', "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		purchase: ["-47,200,000", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],	
		sale: ["0", "0", "0", "78,480,580", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		purchase_costs: ["-283,200", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		sale_costs: ["0", "0", "0", "-1,412,650", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		total_cash_flows: ['-45,321,995', '-658,318', '-10,726,974', '80,626,309', "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
		do_nothing: "8,729,040",
		pay_broker: "-283,200",
		increase_rents: "5,194,837",
		find_new_tenants: "24,818,750",
		market_improves: "2,332,750",
		future_leasing: "5,156,225",
		turnover: "-935,071",
		bad_debt: "-15,802",
		improve_units: "-154,442",
		pay_leasing_broker: "-1,512,763",
		renovate_building: "-14,981,156",
		inflation: "-231,675",
		increased_expenses: "-1,110,013",
		brokered_auction: "-1,446,058",
		taxes_due_at_sale: "-1,822,551"
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
