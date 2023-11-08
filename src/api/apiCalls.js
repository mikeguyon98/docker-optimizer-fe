import axios from 'axios';

export const analyzePost = async (imageName, dockerFile) => {
    try {
        const response = await axios.post('https://diaapi.com/analyze', {
            "image_name": imageName,
            "dockerfile": dockerFile
        });
        return response.data;
    } catch (error) {
        console.error('There was an error sending the data to the API', error);
        return "Error: Couldn't optimize the Docker image. Please try again later.";
    }
}