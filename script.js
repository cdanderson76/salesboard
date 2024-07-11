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

// Variables to hold emojis

let liveSalesEmojiArr = [];
let liveAchievmentsEmojiArr = [];

// Variables to assist in calculation of money

let totalCommission = 0;
let totalRevenue = 0;

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
    liveSalesEmojiArr = [];
    liveAchievmentsEmojiArr = [];
    totalCommission = 0;
    totalRevenue = 0;
});


function initiateSales(obj) {

    // Live Sales Section

    liveSalesEmojiArr.push(`${obj.emoji}`);
    salesTracker.textContent = liveSalesEmojiArr.join('');
    liveSalesCount.textContent = liveSalesEmojiArr.length;

    // Total Commission Calculation

    totalCommission += obj.commission;
    commission.textContent = `$${totalCommission}`;

    // Total Revenue Calculation

    totalRevenue += obj.revenue;
    revenue.textContent = `$${totalRevenue}`;


    // Conditionals for Various Achievements

    if ( liveSalesEmojiArr.length === 1 ) {
        liveAchievmentsEmojiArr.push('🔔');
    } 
    
    if ( liveSalesEmojiArr.length === 15 ) {
        liveAchievmentsEmojiArr.push('🏆');
    }

    if ( liveSalesEmojiArr.length === 20 ) {
        liveAchievmentsEmojiArr.push('✈️');
    }

    if ( totalRevenue >= 2500 ) {
        if ( !liveAchievmentsEmojiArr.includes('💰')) {
            liveAchievmentsEmojiArr.push('💰');
        }
    }

    if ( totalRevenue >= 5000 ) {
        if ( !liveAchievmentsEmojiArr.includes('💵')) {
            liveAchievmentsEmojiArr.push('💵')
        }
    }

    if ( liveSalesEmojiArr.length === 30 ) {
        liveAchievmentsEmojiArr.push('🐐');
    }

    // Live Achievements Section

    liveAchievementsCount.textContent = liveAchievmentsEmojiArr.length;
    liveAchievements.textContent = liveAchievmentsEmojiArr.join('');
}