// Function to update the steering wheel image based on CAN messages
function updateSteeringWheelImage(canData) {
    const steeringWheel = document.getElementById('steering-wheel');
            
    // Check the CAN message or data to determine the state
    // For example, you can use a property in canData like "state" to indicate the state
    const state = wheel_canData.state;
            
    // Update the image based on the state
    if (state === 'state1') {
        steeringWheel.style.backgroundImage = "url('pics/zone1-stw-notouch-jeep.png')";
    } else if (state === 'state2') {
        steeringWheel.style.backgroundImage = "url('pics/zone1-stw-yestouch-jeep.png')";
    }
}
            
// Simulated CAN message data (replace with your actual data source)
const wheel_canData = {
    state: 'state1', // Initial state
};
            
// Simulate receiving CAN messages and updating the image
setInterval(function () {
    // Update the CAN data from your actual source
    // For this example, we'll just toggle between state1 and state2
    wheel_canData.state = wheel_canData.state === 'state1' ? 'state2' : 'state1';
    updateSteeringWheelImage(wheel_canData);
}, 1000); // Update every 1 seconds (adjust as needed)