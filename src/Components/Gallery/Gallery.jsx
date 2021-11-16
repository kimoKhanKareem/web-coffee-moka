import { Grid, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import  axios  from 'axios';
import { useEffect, useState } from "react";
import { tab } from "../../responsive"


const Gallery = () => {

    const [ allphoto , setAllphoto ] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then(res=>{ setAllphoto(res.data.photogo)})
    }, [])
    const veData = allphoto.map((allphotoItem) => {
        return(
            <Grid  key={allphotoItem.id} item   lg={3} md={6}  xs={12}>
                <FtcoPaper>
                    <img src={allphotoItem.images} alt="img..." />
                        <button>
                            <a href="##" >
                                <SearchIcon  style = {{ color:"white"}}/>
                            </a>   
                        </button> 
                </FtcoPaper>
            </Grid>
        )
    })
    return (
        <div>
            <Grid container spacing={0}>
                {veData}
            </Grid>
        </div>
    )
}
export default Gallery
//style component
const FtcoPaper = styled(Paper)`
position: relative;
transition: all .3s ease-out;  
height: 230px;
${tab({
            height: '270px'
        })}

    img{
        cursor: pointer;
        height: 100%;
        ${tab({
            height: '100%'
        })}
    }
    &:hover{
        button{
            opacity: 1;
            }
        }
    button{
        position: absolute;
        left: 50%;
        top: 50%;
        Transform: translate(-50%, -50%);
        cursor: pointer;
        color: white;
        background: transparent;
        border: none;
        opacity: 0;
        transition: .4s ease-out; 

        a{
            z-index: +1;
            &:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                right: 0;
                bottom: 0;
                transform: translate(-50%, -50%);
                width: 50px;
                height: 50px;
                background: #c49b63;
                z-index: -1;
            }
        }
    }
`;

