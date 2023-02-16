import React from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  
import { Card as CardPrime } from 'primereact/card';
import { Rating } from 'primereact/rating';
import { Container } from './styles';

export interface IPropsRoot{
    titleMovie?: string
    header: React.ReactNode
    children: string
    haveStars?: number
}

const Root: React.FC<IPropsRoot> = ({children,titleMovie, header, haveStars}) => {
    return(
        <Container>
        <CardPrime header={header}>     
        <p style={{minWidth: "0",maxWidth: "10.5rem", fontSize: "1.6rem", whiteSpace: "nowrap", overflow: "hidden",textOverflow: "ellipsis"}}>{titleMovie}</p>     
            { haveStars 
            ?
            <Rating value={haveStars} readOnly cancel={false} />
            :
            <>
            </>
            }
        </CardPrime>
    </Container>
    );
}
Root.displayName = `Card.Root`

export interface IPropsImage{
    imgMovie?: string
}

const Image: React.FC<IPropsImage> = ({imgMovie}) => {
    return(
        <>
            <img style={{width: '13rem', margin: "auto auto" }} src={imgMovie ?? `https://m.media-amazon.com/images/M/MV5BZDc4MzVkNzYtZTRiZC00ODYwLWJjZmMtMDIyNjQ1M2M1OGM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg`} alt="" />
        </>
    );
}

Root.displayName = `Card.Image`

export const Card = {
    Root,
    Image
}

//example:             <Card.Root  children='sinopse incurtada' titleMovie='filme de ação' header={<Card.Image/>}/>