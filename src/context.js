import { createContext } from "react";

const CategoryContext = createContext({
    categories:null,
    setCategories:() => {}
})

export default CategoryContext