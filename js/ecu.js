// Function to update the ECU image based on CAN messages
function updateECU(canData) {
    const ecu = document.getElementById('ecu');
            
    // Check the CAN message or data to determine the state
    // For example, you can use a property in canData like "state" to indicate the state
    const ecu_state = ecu_canData.state;
            
    // Update the image based on the state
    if (ecu_state === 'ecu_state1') {
        ecu.style.backgroundImage = "url('pics/transparent.jpg')";
    } else if (ecu_state === 'ecu_state2') {
        ecu.style.backgroundImage = "url('pics/ecu-error-red-circle.png')";
    }
}
            
// Simulated CAN message data (replace with your actual data source)
const ecu_canData = {
    state: 'ecu_state1', // Initial state
};
            
// Simulate receiving CAN messages and updating the image
setInterval(function () {
    // Update the CAN data from your actual source
    // For this example, we'll just toggle between state1 and state2
    ecu_canData.state = ecu_canData.state === 'ecu_state1' ? 'ecu_state2' : 'ecu_state1';
    updateECU(ecu_canData);
}, 1000); // Update every 1 seconds (adjust as needed)