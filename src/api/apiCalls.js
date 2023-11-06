import axios from 'axios';

export const analyzePost = async (imageName, dockerFile) => {
    try {
        const response = await axios.post('http://aa620f232990943e08c706ef917c4361-897749343.us-east-2.elb.amazonaws.com/analyze', {
            "image_name": imageName,
            "dockerfile": dockerFile
        });
        return response.data;
    } catch (error) {
        console.error('There was an error sending the data to the API', error);
        return "Error: Couldn't optimize the Docker image. Please try again later.";
    }
}