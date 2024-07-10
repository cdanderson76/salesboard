import { productA, productB } from "./data.js";
         
const starBtn = document.getElementById('star-btn');
const fireBtn = document.getElementById('fire-btn');
const resetBtn = document.getElementById('reset-btn');

// Live Sales and Achievement Counts via Text

const liveSalesCount = document.getElementById('live-sales-count');
const liveAchievementsCount = document.getElementById('live-achievements-count');

// Sales Symbols

const salesTracker = document.getElementById('sales-emojis');
const liveAchievements = document.getElementById('live-achievements');

// Commission and Revenue

const revenue = document.getElementById('revenue');
const commission = document.getElementById('commission');

// Variables for Incrementing

let emojiSalesNumber = 0;
let achievementSalesNumber = 0;
let totalCommission = 0;
let totalRevenue = 0;
let sales = '';
let prizes = '';

// Setting visual commission and revenue values

commission.textContent = '$' + 0;
revenue.textContent = '$'+ 0;


// Event Listeners for Buttons

starBtn.addEventListener('click', () => { initiateSales(productA);});
fireBtn.addEventListener('click', () => { initiateSales(productB);});

resetBtn.addEventListener('click', function() {

    localStorage.clear();

    // Resetting data types involving strings

    commission.textContent = '$' + 0;
    revenue.textContent = '$'+ 0;

    salesTracker.textContent = '';
    liveAchievements.textContent = '';

    // Resetting all data types of 'Int'

    liveAchievementsCount.textContent = 0;
    liveSalesCount.textContent = 0;
    achievementSalesNumber = 0;
    emojiSalesNumber = 0;
    totalCommission = 0;
    totalRevenue = 0;
});


function initiateSales(obj) {

    // Get the sales variable to add icons to the string and save it in localStorage

    salesTracker.textContent += `${obj.emoji}`;
    sales = salesTracker.textContent;

    emojiSalesNumber++;
    liveSalesCount.textContent = emojiSalesNumber;
    liveAchievementsCount.textContent = achievementSalesNumber;

    // Total Commission

    totalCommission += obj.commission;
    commission.textContent = `$${totalCommission}`;

    // Total Revenue

    totalRevenue += obj.revenue;
    revenue.textContent = `$${totalRevenue}`;
    

    if( emojiSalesNumber === 40 ) {
        starBtn.disabled = true;
        fireBtn.disabled = true;
    }

    if ( emojiSalesNumber === 1 ) {
        liveAchievements.textContent = '🔔';
        achievementSalesNumber++
        liveAchievementsCount.textContent = `${achievementSalesNumber}`;
    } 
    
    if ( emojiSalesNumber === 15 ) {
        liveAchievements.textContent += '🏆';
        achievementSalesNumber++
        liveAchievementsCount.textContent = `${achievementSalesNumber}`;
    }

    if ( totalRevenue >= 2500 ) {
        if ( !liveAchievements.textContent.includes('💰')) {
            liveAchievements.textContent += '💰';
            achievementSalesNumber++
            liveAchievementsCount.textContent = `${achievementSalesNumber}`; 
        }
    }

    // Get the sales variable to add icons to the string and save it in localStorage

    prizes = liveAchievements.textContent;

    localStorage.setItem('emojiSalesNumber', JSON.stringify(emojiSalesNumber));
    localStorage.setItem('liveAchievementsCount', JSON.stringify(achievementSalesNumber))
    localStorage.setItem('totalCommission', JSON.stringify(totalCommission));
    localStorage.setItem('totalRevenue', JSON.stringify(totalRevenue));
    localStorage.setItem('salesTracker', sales);
    localStorage.setItem('liveAchievements', prizes);
}


// Retrieve stored data if data is present

if( localStorage.length !== 0 ) {
    liveSalesCount.textContent = localStorage.getItem('emojiSalesNumber');
    liveAchievementsCount.textContent = localStorage.getItem('liveAchievementsCount');
    commission.textContent = `$${localStorage.getItem('totalCommission')}`;
    revenue.textContent = `$${localStorage.getItem('totalRevenue')}`;
    salesTracker.textContent += localStorage.getItem('salesTracker');
    liveAchievements.textContent += localStorage.getItem('liveAchievements');
}












