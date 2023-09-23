export function generateUniqueId() {
	const timestamp = new Date().getTime(); // Get the current timestamp in milliseconds
	const randomId = Math.floor(Math.random() * 1000); // Generate a random number
	console.log(`${timestamp}-${randomId}`);
	return `${timestamp}-${randomId}`;
}
