import React from 'react';
import NewsItem from './news_list_item';

//functional component
const NewsList = (props) => {

    const items = props.news.map((item)=>{
        return  (
                    <NewsItem key={item.id} item={item}/>
                )
            });
    //console.log(props)
            return (
                <div>

                    {items}
                </div>
                )

            }

export default NewsList;