function calculateTotal() {
    console.log("calculateTotal() called"); // Add this line
    let implementationCost = 0;

    // Implementation Costs
    implementationCost += parseInt(document.getElementById("reLease").value);
    implementationCost += parseInt(document.getElementById("assetLease").value);
    implementationCost += parseInt(document.getElementById("internalLease").value);
    implementationCost += parseInt(document.getElementById("optionsClauses").value);
    implementationCost += parseInt(document.getElementById("accountsPayable").value);
    implementationCost += parseInt(document.getElementById("accountsReceivable").value);

    implementationCost += parseInt(document.getElementById("projectSchedule").value);
    implementationCost += parseInt(document.getElementById("projectBudget").value);
    implementationCost += parseInt(document.getElementById("projectDocumentation").value);
    implementationCost += parseInt(document.getElementById("vendorEngagementProject").value);
    implementationCost += parseInt(document.getElementById("projectBilling").value);

    implementationCost += parseInt(document.getElementById("spaceAssignment").value);
    implementationCost += parseInt(document.getElementById("spaceChargeback").value);
    implementationCost += parseInt(document.getElementById("moveManagement").value);
    implementationCost += parseInt(document.getElementById("moveProjects").value);
    implementationCost += parseInt(document.getElementById("spacePlanning").value);

    implementationCost += parseInt(document.getElementById("serviceRequests").value);
    implementationCost += parseInt(document.getElementById("preventiveMaintenance").value);
    implementationCost += parseInt(document.getElementById("inventoryManagement").value);
    implementationCost += parseInt(document.getElementById("vendorEngagementMaintenance").value);
    implementationCost += parseInt(document.getElementById("workOrderCompletion").value);
    implementationCost += parseInt(document.getElementById("projectManagementMaintenance").value);

    // Slider Values
    let projectManagementMultiplier = parseFloat(document.getElementById("projectManagementSlider").value);
    let changeManagementMultiplier = parseFloat(document.getElementById("changeManagementSlider").value);
    let cadServicesMultiplier = parseFloat(document.getElementById("cadServicesSlider").value);
    let dataCleanupMultiplier = parseFloat(document.getElementById("dataCleanupSlider").value);
    let integrationEffortsMultiplier = parseFloat(document.getElementById("integrationEffortsSlider").value);

    // Total Multiplier
    let totalMultiplier = 1 + (projectManagementMultiplier - 1) + (changeManagementMultiplier - 1) + (cadServicesMultiplier - 1) + (dataCleanupMultiplier - 1) + (integrationEffortsMultiplier - 1);

    // Software Cost
    let softwareCost = parseInt(document.getElementById("software").value);

    // Calculate Costs
    let finalImplementationCost = implementationCost * totalMultiplier;
    // Calculate Total Cost
    let totalCost = finalImplementationCost + softwareCost;

    console.log("Implementation Cost:", implementationCost); // ADDED
    console.log("Total Multiplier:", totalMultiplier); // ADDED
    console.log("Final Implementation Cost:", finalImplementationCost); // ADDED
    console.log("Software Cost:", softwareCost); // ADDED
    console.log("Total Cost:", totalCost); // ADDED
    
    // Update the display
    document.getElementById("implementationCostDisplay").innerText = "$" + finalImplementationCost.toLocaleString();
    document.getElementById("softwareCostDisplay").innerText = "$" + softwareCost.toLocaleString();
    document.getElementById("totalCost").innerText = "$" + totalCost.toLocaleString();
    document.getElementById("totalMultiplier").innerText = totalMultiplier.toFixed(2) + "x";
}

function updateSliderValue(sliderName, value) {
    document.getElementById(sliderName + "Value").innerText = value + "x";
    calculateTotal();
}

// Initial Calculation
calculateTotal();
