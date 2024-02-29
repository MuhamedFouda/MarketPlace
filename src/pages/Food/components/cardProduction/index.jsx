import listt from "../../../../food/food"
import "./index.scss"

export default function CardProduction() {
const products=["...listt"]
return (
    
    <div>
           {
               products.map((ele)=>{
                console.log("muahed")
                return(
                    <div>
                        <h1>{ele.strCategory}</h1>
                    </div>
                )
            })
           }
        </div>
    )
}