import React from 'react';

import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant}) => {

    const elements = posts.map((item) => {
        const {id, label, important, like} = item;

        if (typeof(item) == 'object') {
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem 
                        label={label} 
                        important={important}
                        like={like}
                        onDelete={() => onDelete(id)}
                        onToggleLiked={() => onToggleLiked(id, 'like')}
                        onToggleImportant={() => onToggleImportant(id, 'important')}/>
                </li>        
            )    
        }   
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>    
    )
}

export default PostList;