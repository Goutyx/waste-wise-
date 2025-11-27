// Farmer Module JavaScript
document.getElementById('farmerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const location = document.getElementById('location').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const farmingType = document.getElementById('farmingType').value;
    const farmArea = parseFloat(document.getElementById('farmArea').value);
    const cropResidue = parseFloat(document.getElementById('cropResidue').value);
    const animalWaste = parseFloat(document.getElementById('animalWaste').value);

    // Calculate waste
    const dailyWaste = cropResidue + animalWaste;
    const monthlyWaste = dailyWaste * 30;
    const yearlyWaste = dailyWaste * 365;

    // Calculate biogas potential (approximately 0.05-0.07 cubic meters per kg of animal waste)
    const biogasPerDay = (animalWaste * 0.06).toFixed(2);

    // Display results
    document.getElementById('dailyWaste').textContent = dailyWaste.toFixed(2);
    document.getElementById('monthlyWaste').textContent = monthlyWaste.toFixed(2);
    document.getElementById('yearlyWaste').textContent = yearlyWaste.toFixed(2);
    document.getElementById('biogasOutput').innerHTML = `<i class="fas fa-check text-green-500 mr-2"></i>Daily biogas production potential: ${biogasPerDay} m³/day`;

    // Display user information
    document.getElementById('displayName').textContent = fullName;
    document.getElementById('displayLocation').textContent = location;
    document.getElementById('displayContact').textContent = contactNumber;
    document.getElementById('displayFarmType').textContent = farmingType;
    document.getElementById('displayFarmArea').textContent = farmArea;

    // Show results
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
});
