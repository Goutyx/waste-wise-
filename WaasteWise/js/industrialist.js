// Industrialist Module JavaScript
document.getElementById('industrialistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const companyName = document.getElementById('companyName').value;
    const industryType = document.getElementById('industryType').value;
    const dailyProduction = parseFloat(document.getElementById('dailyProduction').value);
    const wasteType = document.getElementById('wasteType').value;
    const dailyWasteQuantity = parseFloat(document.getElementById('dailyWasteQuantity').value);

    // Calculate metrics
    const monthlyWaste = dailyWasteQuantity * 30;
    const yearlyWaste = dailyWasteQuantity * 365;
    const wastePerUnit = (dailyWasteQuantity / dailyProduction).toFixed(3);

    // Weekly distribution (realistic variations)
    const week1 = (monthlyWaste * 0.24).toFixed(2);
    const week2 = (monthlyWaste * 0.28).toFixed(2);
    const week34 = (monthlyWaste * 0.48).toFixed(2);

    // Display company info
    document.getElementById('displayCompany').textContent = companyName;
    document.getElementById('displayIndustry').textContent = industryType;
    document.getElementById('displayWasteType').textContent = wasteType;

    // Display metrics
    document.getElementById('dailyWaste').textContent = dailyWasteQuantity.toFixed(2);
    document.getElementById('monthlyWaste').textContent = monthlyWaste.toFixed(2);
    document.getElementById('yearlyWaste').textContent = yearlyWaste.toFixed(2);
    document.getElementById('wastePerUnit').textContent = wastePerUnit;

    // Display weekly distribution
    document.getElementById('week1').textContent = week1 + ' kg';
    document.getElementById('week2').textContent = week2 + ' kg';
    document.getElementById('week34').textContent = week34 + ' kg';

    // Show results
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
});
