//HTTP POST REQUEST
const API_KEY = "GET__FROM__PRIVATE__SOURCES";
const POST_URL = "https://vision.googleapis.com/v1/images:annotate?key=" + API_KEY;

axios.post(POST_URL,
    {
        "requests": [
            {
                "image": {
                    "content": imageUrl
                },
                "features": [
                    {
                        "type": "FACE_DETECTION",
                        "maxResults": 1
                    }
                ]
            }
        ]
    }
).then((response) => {
    this.processResponse(response)
}).catch(function (error) {
    console.log(error);
});