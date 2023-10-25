const axios = require("axios")

module.exports = {
    Add: async (req, res) => {
        const url = "https://developers.flouci.com/api/generate_payment"
        const payload = {
            "app_token": "c3a9a48a-1560-4c16-baa2-d5f68c8dffee",
            "app_secret": "006751ab-7602-4687-b804-02405283d5da",
            "amount": req.body.amount,
            "accept_card": "true",
            "session_timeout_secs": 1200,
            "success_link": "https://localhost:5000/success",
            "fail_link": "https://localhost:5000/fail",
            "developer_tracking_id": "ecb73e5e-a059-43c9-86c4-aa54bae0074b"
        }
        await axios
            .post(url, payload)
            .then(result => { res.send(result.data) })
            .catch(err => console.error(err))
    }
}