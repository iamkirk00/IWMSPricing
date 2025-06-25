import React, { useState, useEffect } from 'react';
import './App.css';

const ImplementationItem = ({ label, onChange }) => {
    return (
        <div>
            <label>{label}:</label>
            <select onChange={onChange} defaultValue="Not Implemented">
                <option value="Not Implemented">Not Implemented</option>
                <option value="Initialized">Initialized</option>
                <option value="Configured">Configured</option>
                <option value="Heavily Configured">Heavily Configured</option>
            </select>
        </div>
    );
};

const ServiceSlider = ({ label, onChange, value }) => {
    return (
        <div>
            <label>{label}: {value.toFixed(2)}x</label>
            <input
                type="range"
                min="1.00"
                max="3.00"
                step="0.01"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

const App = () => {
    const [leaseValues, setLeaseValues] = useState({
        reLease: "Not Implemented",
        assetLease: "Not Implemented",
        internalLease: "Not Implemented",
        optionsClauses: "Not Implemented",
        accountsPayable: "Not Implemented",
        accountsReceivable: "Not Implemented",
    });

    const [projectValues, setProjectValues] = useState({
        projectSchedule: "Not Implemented",
        projectBudget: "Not Implemented",
        projectDocumentation: "Not Implemented",
        vendorEngagement: "Not Implemented",
        projectBilling: "Not Implemented",
    });

    const [spaceValues, setSpaceValues] = useState({
        spaceAssignment: "Not Implemented",
        spaceChargeback: "Not Implemented",
        moveManagement: "Not Implemented",
        moveProjects: "Not Implemented",
        spacePlanning: "Not Implemented",
    });

    const [maintenanceValues, setMaintenanceValues] = useState({
        serviceRequests: "Not Implemented",
        preventiveMaintenance: "Not Implemented",
        inventoryManagement: "Not Implemented",
        vendorEngagement: "Not Implemented",
        workOrderCompletion: "Not Implemented",
        projectManagement: "Not Implemented",
    });

    const [sliderValues, setSliderValues] = useState({
        projectManagement: 1.00,
        changeManagement: 1.00,
        cadServices: 1.00,
        dataCleanup: 1.00,
        integrationEfforts: 1.00,
    });

    const [software, setSoftware] = useState("ServiceNow");
    const [totalCost, setTotalCost] = useState(0);

    const costPerItem = 25000;

    const softwareCosts = {
        ServiceNow: 150000,
        Archibus: 100000,
        IBMTRIRIGA: 200000,
    };

    useEffect(() => {
        const calculateTotalCost = () => {
            let implementationCost = 0;

            const calculateSectionCost = (sectionValues) => {
                for (const key in sectionValues) {
                    const value = sectionValues[key];
                    if (value === "Initialized") {
                        implementationCost += costPerItem;
                    } else if (value === "Configured") {
                        implementationCost += costPerItem * 2;
                    } else if (value === "Heavily Configured") {
                        implementationCost += costPerItem * 4;
                    }
                }
            };

            calculateSectionCost(leaseValues);
            calculateSectionCost(projectValues);
            calculateSectionCost(spaceValues);
            calculateSectionCost(maintenanceValues);

            let totalMultiplier = 1;
            for (const key in sliderValues) {
                totalMultiplier += (sliderValues[key] - 1);
            }

            const softwareCost = softwareCosts[software];
            const calculatedTotalCost = implementationCost * totalMultiplier + softwareCost;

            setTotalCost(calculatedTotalCost);
        };

        calculateTotalCost();
    }, [leaseValues, projectValues, spaceValues, maintenanceValues, sliderValues, software, costPerItem, softwareCosts]);

    const handleLeaseChange = (event) => {
        const { name, value } = event.target;
        setLeaseValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleProjectChange = (event) => {
        const { name, value } = event.target;
        setProjectValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSpaceChange = (event) => {
        const { name, value } = event.target;
        setSpaceValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleMaintenanceChange = (event) => {
        const { name, value } = event.target;
        setMaintenanceValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSliderChange = (event) => {
        const { name, value } = event.target;
        setSliderValues(prevValues => ({ ...prevValues, [name]: parseFloat(value) }));
    };

    return (
        <div className="app-container">
            <section id="implementation">
                <h2>Implementation Includes:</h2>
                <div className="columns">
                    <div className="column">
                        <h3>Lease</h3>
                        <ImplementationItem label="RE Lease" onChange={(e) => handleLeaseChange(e)} name="reLease" />
                        <ImplementationItem label="Asset Lease" onChange={(e) => handleLeaseChange(e)} name="assetLease" />
                        <ImplementationItem label="Internal Lease" onChange={(e) => handleLeaseChange(e)} name="internalLease" />
                        <ImplementationItem label="Options & Clauses" onChange={(e) => handleLeaseChange(e)} name="optionsClauses" />
                        <ImplementationItem label="Accounts Payable (AP)" onChange={(e) => handleLeaseChange(e)} name="accountsPayable" />
                        <ImplementationItem label="Accounts Receivable (AR)" onChange={(e) => handleLeaseChange(e)} name="accountsReceivable" />
                    </div>

                    <div className="column">
                        <h3>Projects</h3>
                        <ImplementationItem label="Project Schedule" onChange={(e) => handleProjectChange(e)} name="projectSchedule" />
                        <ImplementationItem label="Project Budget" onChange={(e) => handleProjectChange(e)} name="projectBudget" />
                        <ImplementationItem label="Project Documentation" onChange={(e) => handleProjectChange(e)} name="projectDocumentation" />
                        <ImplementationItem label="Vendor Engagement" onChange={(e) => handleProjectChange(e)} name="vendorEngagement" />
                        <ImplementationItem label="Project Billing" onChange={(e) => handleProjectChange(e)} name="projectBilling" />
                    </div>

                    <div className="column">
                        <h3>Space</h3>
                        <ImplementationItem label="Space Assignment" onChange={(e) => handleSpaceChange(e)} name="spaceAssignment" />
                        <ImplementationItem label="Space Chargeback" onChange={(e) => handleSpaceChange(e)} name="spaceChargeback" />
                        <ImplementationItem label="Move Management" onChange={(e) => handleSpaceChange(e)} name="moveManagement" />
                        <ImplementationItem label="Move Projects" onChange={(e) => handleSpaceChange(e)} name="moveProjects" />
                        <ImplementationItem label="Space Planning" onChange={(e) => handleSpaceChange(e)} name="spacePlanning" />
                    </div>

                    <div className="column">
                        <h3>Maintenance</h3>
                        <ImplementationItem label="Service Requests" onChange={(e) => handleMaintenanceChange(e)} name="serviceRequests" />
                        <ImplementationItem label="Preventive Maintenance" onChange={(e) => handleMaintenanceChange(e)} name="preventiveMaintenance" />
                        <ImplementationItem label="Inventory Management" onChange={(e) => handleMaintenanceChange(e)} name="inventoryManagement" />
                        <ImplementationItem label="Vendor Engagement" onChange={(e) => handleMaintenanceChange(e)} name="vendorEngagement" />
                        <ImplementationItem label="Work Order Completion" onChange={(e) => handleMaintenanceChange(e)} name="workOrderCompletion" />
                        <ImplementationItem label="Project Management" onChange={(e) => handleMaintenanceChange(e)} name="projectManagement" />
                    </div>
                </div>
            </section>

            <section id="services">
                <h2>Services Engagement</h2>
                <ServiceSlider label="Project Management" value={sliderValues.projectManagement} onChange={(e) => handleSliderChange(e)} name="projectManagement" />
                <ServiceSlider label="Change Management" value={sliderValues.changeManagement} onChange={(e) => handleSliderChange(e)} name="changeManagement" />
                <ServiceSlider label="CAD Services" value={sliderValues.cadServices} onChange={(e) => handleSliderChange(e)} name="cadServices" />
                <ServiceSlider label="Data Cleanup" value={sliderValues.dataCleanup} onChange={(e) => handleSliderChange(e)} name="dataCleanup" />
                <ServiceSlider label="Integration Efforts" value={sliderValues.integrationEfforts} onChange={(e) => handleSliderChange(e)} name="integrationEfforts" />

                <div>
                    Total Multiplier: {(Object.values(sliderValues).reduce((acc, val) => acc + (val - 1), 1)).toFixed(2)}x
                </div>
            </section>

            <section id="software">
                <h2>Software Used</h2>
                <label>Select Software:</label>
                <select value={software} onChange={(e) => setSoftware(e.target.value)}>
                    <option value="ServiceNow">ServiceNow</option>
                    <option value="Archibus">Archibus</option>
                    <option value="IBMTRIRIGA">IBM TRIRIGA</option>
                </select>
            </section>

            <section id="total">
                <h2>Total Estimated Cost: ${totalCost.toLocaleString()}</h2>
            </section>
        </div>
    );
};

export default App;
