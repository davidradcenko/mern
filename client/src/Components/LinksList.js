import React from 'react'
import {Link} from 'react-router-dom'
export const LinksList=({links})=>{
    debugger
    if(!links.length){
return <p className="center">Ссылок пока нет</p>
    }
return(
    <>
        <p>Привет мир сука</p>
    <table>
        <thead>
        <tr>
            <th>№</th>
            <th>Оригинальная</th>
            <th>Сокращенныя</th>
            <th>Открыть</th>
        </tr>
        </thead>

        <tbody>
        {links.map((link, index) =>{
            console.log("eeeeeeeeeeeeeeeeeeeeeeeeeee")
            return(
                <tr key={link._id}>
                    <td>{index +1}</td>
                    <td>{link.from}</td>
                    <td>{link.to}</td>
                    <td>
                        <Link to={`/detail/${link._id}`}>Открыть</Link>
                    </td>
                </tr>
            )
        })}

        </tbody>
    </table>
    </>
)
}