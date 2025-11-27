// Citizen Module JavaScript
document.getElementById('citizenForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const city = document.getElementById('city').value;
    const familyMembers = parseInt(document.getElementById('familyMembers').value);
    const houseType = document.getElementById('houseType').value;
    const wetWaste = parseFloat(document.getElementById('wetWaste').value);
    const dryWaste = parseFloat(document.getElementById('dryWaste').value);
    const plasticWaste = parseFloat(document.getElementById('plasticWaste').value);

    // Calculate totals
    const dailyTotal = wetWaste + dryWaste + plasticWaste;
    const monthlyTotal = dailyTotal * 30;
    const yearlyTotal = dailyTotal * 365;
    const perPerson = (dailyTotal / familyMembers).toFixed(2);

    // Calculate percentages
    const wetPercent = dailyTotal > 0 ? ((wetWaste / dailyTotal) * 100).toFixed(1) : 0;
    const dryPercent = dailyTotal > 0 ? ((dryWaste / dailyTotal) * 100).toFixed(1) : 0;
    const plasticPercent = dailyTotal > 0 ? ((plasticWaste / dailyTotal) * 100).toFixed(1) : 0;

    // Display user information
    document.getElementById('displayName').textContent = fullName;
    document.getElementById('displayCity').textContent = city;
    document.getElementById('displayFamilySize').textContent = familyMembers;

    // Display totals
    document.getElementById('dailyTotal').textContent = dailyTotal.toFixed(2);
    document.getElementById('monthlyTotal').textContent = monthlyTotal.toFixed(2);
    document.getElementById('yearlyTotal').textContent = yearlyTotal.toFixed(2);
    document.getElementById('perPerson').textContent = perPerson;

    // Display waste breakdown
    document.getElementById('displayWet').textContent = wetWaste.toFixed(2);
    document.getElementById('displayDry').textContent = dryWaste.toFixed(2);
    document.getElementById('displayPlastic').textContent = plasticWaste.toFixed(2);
    document.getElementById('wetPercent').textContent = wetPercent + '%';
    document.getElementById('dryPercent').textContent = dryPercent + '%';
    document.getElementById('plasticPercent').textContent = plasticPercent + '%';

    // Show results
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
});
