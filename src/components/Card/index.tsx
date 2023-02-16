import React from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  
import { Card as CardPrime } from 'primereact/card';
import { Rating } from 'primereact/rating';

export interface IPropsRoot{
    titleMovie?: string
    header: React.ReactNode
    children: string
    haveStars?: number
}

const Root: React.FC<IPropsRoot> = ({children,titleMovie, header, haveStars}) => {
    return(
        <CardPrime title={titleMovie ?? 'title'} header={header}>          
            { haveStars ?
                <Rating value={haveStars} readOnly cancel={false} />
                        :
                <>
                </>
            }
            
        </CardPrime>
    );
}
Root.displayName = `Card.Root`

export interface IPropsImage{
    imgMovie?: string
}

const Image: React.FC<IPropsImage> = ({imgMovie}) => {
    return(
        <>
            <img style={{width: '30rem'}} src={imgMovie ?? `https://docs.google.com/uc?id=1I3kIAWfqOamABw3xyWOtK_jHpG6Do-Wn`} alt="" />
        </>
    );
}

Root.displayName = `Card.Image`

export const Card = {
    Root,
    Image
}

//example:             <Card.Root  children='sinopse incurtada' titleMovie='filme de ação' header={<Card.Image/>}/>