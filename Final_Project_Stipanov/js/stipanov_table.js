// Import modules from my GitHub account, where they are stored in a JSON array
import {findPropertiesByName} from 'https://tstipanov.github.io/601_final_project/data.js';
var property = null;
property = findPropertiesByName("Joe Mann"); 


var do_nothing = parseFloat(property[0].do_nothing.replace(/,/g, ''))
var pay_broker = parseFloat(property[0].pay_broker.replace(/,/g, '')) + do_nothing
var increase_rents = parseFloat(property[0].increase_rents.replace(/,/g, '')) + pay_broker
var find_new_tenants = parseFloat(property[0].find_new_tenants.replace(/,/g, '')) + increase_rents
var market_improves = parseFloat(property[0].market_improves.replace(/,/g, '')) + find_new_tenants
var future_leasing = parseFloat(property[0].future_leasing.replace(/,/g, '')) + market_improves
var turnover = parseFloat(property[0].turnover.replace(/,/g, '')) + future_leasing
var bad_debt = parseFloat(property[0].bad_debt.replace(/,/g, '')) + turnover
var improve_units = parseFloat(property[0].improve_units.replace(/,/g, '')) + bad_debt
var pay_leasing_broker = parseFloat(property[0].pay_leasing_broker.replace(/,/g, '')) + improve_units
var renovate_building = parseFloat(property[0].renovate_building.replace(/,/g, '')) + pay_leasing_broker
var inflation = parseFloat(property[0].inflation.replace(/,/g, '')) + renovate_building
var increased_expenses = parseFloat(property[0].increased_expenses.replace(/,/g, '')) + inflation
var brokered_auction = parseFloat(property[0].brokered_auction.replace(/,/g, '')) + increased_expenses
var taxes_due_at_sale = parseFloat(property[0].taxes_due_at_sale.replace(/,/g, '')) + brokered_auction

google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawWaterfallChart);
  function drawWaterfallChart() {
    var data = google.visualization.arrayToDataTable([
        ['Do Nothing', 0, 0, do_nothing, do_nothing],
        ['Pay Broker', do_nothing, do_nothing, pay_broker, pay_broker],
        ['Increase Rents', pay_broker, pay_broker, increase_rents, increase_rents],
        ["Find New Tenants", increase_rents, increase_rents, find_new_tenants, find_new_tenants],
        ["Market Improves", find_new_tenants, find_new_tenants, market_improves, market_improves],
        ["Future Leasing", market_improves, market_improves, future_leasing, future_leasing],
        ["Turnover", future_leasing, future_leasing, turnover, turnover],
        ["Improve Units", turnover, turnover, improve_units, improve_units],
        ["Pay Leasing Broker", improve_units, improve_units, pay_leasing_broker, pay_leasing_broker],
        ["Renovate Building", pay_leasing_broker, pay_leasing_broker, renovate_building, renovate_building],
        ["Inflation", renovate_building, renovate_building, inflation, inflation],
        ["Increased Expenses", inflation, inflation, increased_expenses, increased_expenses],
        ["Brokered Auction", increased_expenses, increased_expenses, brokered_auction, brokered_auction],
        ["Taxes Due at Sale", brokered_auction, brokered_auction, taxes_due_at_sale, taxes_due_at_sale]

      // Treat the first row as data.
    ], true);

    var options = {
      legend: 'none',
      bar: { groupWidth: '100%' }, // Remove space between bars.
      candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      },
      enableInteractivity: false,
      orientation: 'vertical'
    };
    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }



google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawLineChart);



var leasing = [];
var capital = [];
var cash_flows = [];
property[0].leasing.forEach(item => {leasing.push(-parseFloat(item.replace(/,/g, '')))});
property[0].capital.forEach(item => {capital.push(-parseFloat(item.replace(/,/g, '')))});
property[0].cash_flows.forEach(item => {cash_flows.push(parseFloat(item.replace(/,/g, '')))});

var rows = []
var index = 0;
for (index = 0; index < property[0].likely_revenue.length; index++) { 
    rows.push([index, leasing[index], capital[index], cash_flows[index]]); 
} 

function drawLineChart() {

var data = new google.visualization.DataTable();
data.addColumn('number', 'Year');
data.addColumn('number', 'Leasing');
data.addColumn('number', 'Capital');
data.addColumn('number', 'Cash Flows');

data.addRows(rows);

var options = {
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
    width: 900,
    height: 500
};

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
    
}





    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    var likely_revenue = [];
    var expenses = [];

    property[0].likely_revenue.forEach(item => {likely_revenue.push(parseFloat(item.replace(/,/g, '')))});
    property[0].expenses.forEach(item => {expenses.push(parseFloat(item.replace(/,/g, '')))});




    var rows_2 = [['Year', 'Revenue', 'Expenses']]
    var index = 0;
    for (index = 0; index < property[0].likely_revenue.length; index++) { 
        rows_2.push([index, likely_revenue[index], expenses[index]]); 
    } 


    function drawChart() {
    var data = google.visualization.arrayToDataTable(rows_2);

    var options = {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},


    };

    var area_chart = new google.visualization.AreaChart(document.getElementById('area_chart_div'));
    area_chart.draw(data, options);
};




var potential_revenue_html = document.querySelector("#potential_revenue");
var captured_rent_html = document.querySelector("#captured_rent");
var future_rent_html = document.querySelector("#future_rent");
var lost_rent_html = document.querySelector("#lost_rent");
var concession_html = document.querySelector("#concession");
var total_rent_html = document.querySelector("#total_rent");
var utilities_html = document.querySelector("#utilities");
var misc_income_html = document.querySelector("#misc_income");
var all_revenue_html = document.querySelector("#all_revenue");
var bad_debts_html = document.querySelector("#bad_debts");
var likely_revenue_html = document.querySelector("#likely_revenue");
var expenses_html = document.querySelector("#expenses");
var net_income_html = document.querySelector("#net_income");
var general_upgrades_html = document.querySelector("#general_upgrades");
var space_upgrades_html = document.querySelector("#space_upgrades");
var leasing_html = document.querySelector("#leasing");
var capital_html = document.querySelector("#capital");
var cash_flows_html = document.querySelector("#cash_flows");
var ownership_cash_flows_html = document.querySelector("#cash_flows");
var purchase_html = document.querySelector("#purchase");
var sale_html = document.querySelector("#sale");
var purchase_costs_html = document.querySelector("#purchase_costs");
var sale_costs_html = document.querySelector("#sale_costs");
var total_cash_flows_html = document.querySelector("#total_cash_flows");



var potential_revenue_htmlString = "<th class=\"fixed-side\">Potential Rent</th>";
var captured_rent_htmlString = "<th class=\"fixed-side\">Captured Rent</th>";
var future_rent_htmlString = "<th class=\"fixed-side\">Future Rent</th>";
var lost_rent_htmlString = "<th class=\"fixed-side\">Lost Rent</th>";
var concession_htmlString = "<th class=\"fixed-side\">Concessions</th>";
var total_rent_htmlString = "<th class=\"fixed-side\">Total Rent</th>";
var utilities_htmlString = "<th class=\"fixed-side\">Utilities</th>";
var misc_income_htmlString = "<th class=\"fixed-side\">Misc Income</th>";
var all_revenue_htmlString = "<th class=\"fixed-side\">All Revenue</th>";
var bad_debts_htmlString = "<th class=\"fixed-side\">Bad Debt</th>";
var likely_revenue_htmlString = "<th class=\"fixed-side\">Likely Revenue</th>";
var expenses_htmlString = "<th class=\"fixed-side\">Expenses</th>";
var net_income_htmlString = "<th class=\"fixed-side\">Net Income</th>";
var general_upgrades_htmlString = "<th class=\"fixed-side\">General Upgrades</th>";
var space_upgrades_htmlString = "<th class=\"fixed-side\">Space Upgrades</th>";
var leasing_htmlString = "<th class=\"fixed-side\">Leasing</th>";
var capital_htmlString = "<th class=\"fixed-side\">Capital</th>";
var cash_flows_htmlString = "<th class=\"fixed-side\">Cash Flows</th>";
var ownership_cash_flows_htmlString = "<th class=\"fixed-side\">Ownership Cash Flows</th>";
var purchase_htmlString = "<th class=\"fixed-side\">Purchase</th>";
var sale_htmlString = "<th class=\"fixed-side\">Sale</th>";
var purchase_costs_htmlString = "<th class=\"fixed-side\">Purchase Costs</th>";
var sale_costs_htmlString = "<th class=\"fixed-side\">Sale Costs</th>";
var total_cash_flows_htmlString = "<th class=\"fixed-side\">Total Cash Flows</th>";


for (index = 0; index < property[0].potential_revenue.length; index++) { 
    potential_revenue_htmlString += `<td>${property[0].potential_revenue[index]}</td>`;
    captured_rent_htmlString += `<td>${property[0].captured_rent[index]}</td>`;
    future_rent_htmlString += `<td>${property[0].future_rent[index]}</td>`;
    lost_rent_htmlString += `<td>${property[0].lost_rent[index]}</td>`;
    concession_htmlString += `<td>${property[0].concession[index]}</td>`;
    total_rent_htmlString += `<td>${property[0].total_rent[index]}</td>`;
    utilities_htmlString += `<td>${property[0].utilities[index]}</td>`;
    misc_income_htmlString += `<td>${property[0].misc_income[index]}</td>`;
    all_revenue_htmlString += `<td>${property[0].all_revenue[index]}</td>`;
    bad_debts_htmlString += `<td>${property[0].bad_debts[index]}</td>`;
    likely_revenue_htmlString += `<td>${property[0].likely_revenue[index]}</td>`;
    expenses_htmlString += `<td>${property[0].expenses[index]}</td>`;
    net_income_htmlString += `<td>${property[0].net_income[index]}</td>`;
    general_upgrades_htmlString += `<td>${property[0].general_upgrades[index]}</td>`;
    space_upgrades_htmlString += `<td>${property[0].space_upgrades[index]}</td>`;
    leasing_htmlString += `<td>${property[0].leasing[index]}</td>`;
    capital_htmlString += `<td>${property[0].capital[index]}</td>`;
    cash_flows_htmlString += `<td>${property[0].cash_flows[index]}</td>`;
    ownership_cash_flows_htmlString += `<td>${property[0].ownership_cash_flows[index]}</td>`;
    purchase_htmlString += `<td>${property[0].purchase[index]}</td>`;
    sale_htmlString += `<td>${property[0].sale[index]}</td>`;
    purchase_costs_htmlString += `<td>${property[0].purchase_costs[index]}</td>`;
    sale_costs_htmlString += `<td>${property[0].sale_costs[index]}</td>`;
    total_cash_flows_htmlString += `<td>${property[0].total_cash_flows[index]}</td>`;


} 
potential_revenue_html.innerHTML = potential_revenue_htmlString; 
captured_rent_html.innerHTML = captured_rent_htmlString; 
future_rent_html.innerHTML = future_rent_htmlString; 
lost_rent_html.innerHTML = lost_rent_htmlString; 
concession_html.innerHTML = concession_htmlString; 
total_rent_html.innerHTML = total_rent_htmlString; 
misc_income_html.innerHTML = misc_income_htmlString; 
all_revenue_html.innerHTML = all_revenue_htmlString; 
bad_debts_html.innerHTML = bad_debts_htmlString; 
likely_revenue_html.innerHTML = likely_revenue_htmlString; 
expenses_html.innerHTML = expenses_htmlString; 
net_income_html.innerHTML = net_income_htmlString; 
general_upgrades_html.innerHTML = general_upgrades_htmlString; 
space_upgrades_html.innerHTML = space_upgrades_htmlString; 
leasing_html.innerHTML = leasing_htmlString; 
capital_html.innerHTML = capital_htmlString; 
cash_flows_html.innerHTML = cash_flows_htmlString; 
ownership_cash_flows_html.innerHTML = ownership_cash_flows_htmlString; 
purchase_html.innerHTML = purchase_htmlString; 
sale_html.innerHTML = sale_htmlString; 
purchase_costs_html.innerHTML = purchase_costs_htmlString; 
sale_costs_html.innerHTML = sale_costs_htmlString; 
total_cash_flows_html.innerHTML = total_cash_flows_htmlString;
