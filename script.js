import { productA, productB } from "./data.js";

const starBtn = document.getElementById('star-btn');
const fireBtn = document.getElementById('fire-btn');

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
    let totalCommission = 0;
    let totalRevenue = 0;


// Event Listeners for Buttons

starBtn.addEventListener('click', () => { initiateSales(productA);});
fireBtn.addEventListener('click', () => { initiateSales(productB);});


function initiateSales(obj) {

    salesTracker.textContent += `${obj.emoji}`;
    emojiSalesNumber++;
    liveSalesCount.textContent = emojiSalesNumber;
    console.log(emojiSalesNumber);

    // Total Commission

    totalCommission += obj.commission;
    commission.textContent = `$${totalCommission}`;

    // Total Revenue

    totalRevenue += obj.revenue;
    revenue.textContent = `$${totalRevenue}`;

    if( emojiSalesNumber === 38 ) {
        starBtn.disabled = true;
        fireBtn.disabled = true;
    }

    if ( emojiSalesNumber === 1 ) {
        liveAchievements.textContent = '🔔';
        liveAchievementsCount.textContent++; 
    } 
    
    if ( emojiSalesNumber === 15 ) {
        liveAchievements.textContent += '🏆';
        liveAchievementsCount.textContent++;
    }

    if ( totalRevenue >= 2500 ) {
        if ( !liveAchievements.textContent.includes('💰')) {
            liveAchievements.textContent += '💰';
            liveAchievementsCount.textContent++; 
        }
    }
}


