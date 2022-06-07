import { articles } from "../../../data";
//this lets me fetch a single article based on id
//if i go to http://localhost:3000/api/articles/1, i will have my json of the 1st article
//here we are destructuring req.query.id
export default function handler({query:{id}}, res){
    //takes from data.js and filters them based on the params id
    const filtered = articles.filter(article=> article.id ===id)
    //if the length is greater than 1 (there is an article found) take it from the array since it will only have one item
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }
    else{
        //else spit an error
        res.status(404).json({message:`Article with the id of ${id} is not found`})
    }
}