import { useState, useEffect } from 'react'
import './tree.css';
import avatar from "./assets/default.jpg";

const treeData = [
    {
        id: '1',
        text: 'xdbcjhsdvjcsdf',
        children: [
            {
                id: '2',
                text: 'dvdfjvbfd',
                children: [
                    {
                        id: '3',
                        text: 'jkvbdfhv',
                        children: [
                            {
                                id: '4',
                                text: 'dbvhd',
                            },
                            {
                                id: '5',
                                text: 'dbvhd',
                            }
                        ]
                    },
                    {
                        id: '5',
                        text: 'grgrgrefg',
                        children: [
                            {
                                id: '4',
                                text: 'dbvhd',
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const Tree = () => {
    return (
        <div className="tree">
            {
                treeRendering(treeData)
            }
        </div>
    )
}


const treeRendering = (treeData) => {

    return (
            <ul>
                {
                    treeData.map((item) =>
                        <li key={item.id} className={item.text + item.id}>
                            <div>
                                <img src={avatar}/>
                                <p>position</p>
                            </div>
                            {item.children && item.children.length ?treeRendering(item.children): ''}
                        </li>
                    )

                }
            </ul>
    )
}


export default Tree
