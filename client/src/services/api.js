import axios from 'axios'

const instance = axios.create ({
    baseURL : 'http://localhost:5000/',
    headers: {'Accept': 'application/json'}
  })

async function getQuizData(){
    return await instance.get(`/questions`)
}

export { getQuizData }