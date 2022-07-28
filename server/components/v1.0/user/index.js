import express from 'express';
const router = express.Router();
router.get('/get-OTP-by-Phone', async(request, response) => {
	try {
		const sampleResponse = {
			statusCode: 200,
			data: {
				transaction: '0da69d54-9b3f-4946-ac34-73743ed7a596',
				otp: 743828898
			}
		};
		response.status(200).json(sampleResponse);
	} catch (e) {
		response.status(500).json({ err: e });
	}
});
router.get('/auth-validation', async(request, response) => {
	try {
		const sampleResponse = {
			statusCode: 200,
			data: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiI1NmQwNzYwYi1jODI1LTRkMTUtYjBmMC03OTkyZTI0NjRkN2QiLCJpYXQiOiI3LzI3LzIwMjIgNjo1NzowNyBBTSIsIlVzZXJJZCI6ImY0YTRjN2Y0LTAxZTMtNGRiNi05NzNhLTA4ZGE2ZjkyNzVhYSIsIk9UUCI6IjQyNjgwODc2NiIsImV4cCI6MTY1ODkwNTYyNywiaXNzIjoiSldUQXV0aGVudGljYXRpb25TZXJ2ZXIiLCJhdWQiOiJKV1RTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.u676xR7mKtibXRESsP8ZXtF1yHvN2ZWWQWW_QPjLnmo' }
		};
		response.status(200).json(sampleResponse);
	} catch (e) {
		response.status(500).json({ err: e });
	}
});
export default router;
