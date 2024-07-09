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

let liveSalesNumber = 0;
let totalCommission = 0;
let totalRevenue = 0;


// Star Button Event

starBtn.addEventListener('click', function() {

    // Product A info

    let productA = {
      emoji: "⭐",
      revenue: 200,
      commission: 50
    }

    salesTracker.textContent += `${productA.emoji}`;
    liveSalesNumber++;
    liveSalesCount.textContent = liveSalesNumber;

    // Total Commission

    totalCommission += productA.commission;
    commission.textContent = `$${totalCommission}`;

    // Total Revenue

    totalRevenue += productA.revenue;
    revenue.textContent = `$${totalRevenue}`;
    

    if( liveSalesNumber === 20 ) {
        starBtn.disabled = true;
        fireBtn.disabled = true;
    }

    if ( liveSalesNumber === 1 ) {
      liveAchievements.textContent += '🔔';
      liveAchievementsCount.textContent++; 
    } 
    
    if ( liveSalesNumber === 15 ) {
      liveAchievements.textContent += '🏆';
      liveAchievementsCount.textContent++;
    }

    if ( totalRevenue >= 2500 ) {
      if ( !liveAchievements.textContent.includes('💰')) {
        liveAchievements.textContent += '💰';
        liveAchievementsCount.textContent++; 
      }
      // FIGURE OUT LIVE ACHIEVEMENT FOR 2500
    }
})

// Fire Button Event

fireBtn.addEventListener('click', function() {

    // Product B info

    let productB = {
      emoji: "🔥",
      revenue: 300,
      commission: 75
    }

    salesTracker.textContent += `${productB.emoji}`;
    liveSalesNumber++;
    liveSalesCount.textContent = liveSalesNumber;

    // Total Commission

    totalCommission += productB.commission;
    commission.textContent = `$${totalCommission}`;

    // Total Revenue

    totalRevenue += productB.revenue;
    revenue.textContent = `$${totalRevenue}`;

    if( liveSalesNumber === 20 ) {
      starBtn.disabled = true;
      fireBtn.disabled = true;
    }

    if ( liveSalesNumber === 1 ) {
      liveAchievements.textContent += '🔔';
      liveAchievementsCount.textContent++; 
    } 
    
    if ( liveSalesNumber === 15 ) {
      liveAchievements.textContent += '🏆';
      liveAchievementsCount.textContent++;
    }

    if ( totalRevenue >= 2500 ) {
      if ( !liveAchievements.textContent.includes('💰')) {
        liveAchievements.textContent += '💰';
        liveAchievementsCount.textContent++; 
      }
    }
})




