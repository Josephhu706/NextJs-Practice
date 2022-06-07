import { articles } from "../../../data";
//this fetches all the articles in the data.js file.
//it could be anything though, like an sql database etc, it's just dummy json data
//if i go to http://localhost:3000/api/articles, i will have my json of all my data.js
export default function handler(req, res){
    res.status(200).json(articles)
}