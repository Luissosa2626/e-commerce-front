import styled from "styled-components"
import Button from "@/components/Button"
import CartIcon from "@/components/icons/Cart"
import Link from "next/link"
import { CartContext } from "@/components/CartContext";
import { useContext, useEffect, useState } from "react";
import {ButtonStyle} from "@/components/Button";
import {primary} from "@/lib/colors";
import FlyingButton from "@/components/FlyingButton";
import HeartOutlineIcon from "@/components/icons/HeartOutineIcon";
import HeartSolidIcon from "@/components/icons/HeartSolidIcon";
import axios from "axios";

const ProductWrapper = styled.div`
    button{
        width: 100%;
        text-align: center;
        justify-content: center;
    }
`;

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    img{
        max-width: 100%;
        max-height: 80px;
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size: 0.9rem;
    color: inherit;
    text-decoration: none;
    margin: 0;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
    display: block;
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 5px;
    }
    align-items: center;
    justify-content: space-between;
    margin-top: 3px;
`;

const Price = styled.div`
    font-size: 1rem;
    font-weight: 400;
    text-align: right;
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        font-weight: 500;
        text-align: left;
    }
`;

const WishListButton = styled.button`
    border: 0;
    width: 40px !important;
    height: 40px;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    cursor: pointer;
    ${props => props.wished ? `
    color: red;
    ` : `
    color: black;
    `}
    svg{
        width: 16px;
    }
`;

export default function ProductBox({_id, title, description, price, images, wished=false, onRemoveFromWishList=()=>{}}) {
    const url = '/product/'+_id;
    const [isWished, setIsWished] = useState(wished)

    function addToWishList(e) {
        e.preventDefault()
        e.stopPropagation()
        const nextValue = !isWished
        if(nextValue === false && onRemoveFromWishList) {
            onRemoveFromWishList(_id)
        }
        axios.post('/api/wishList', {
            product: _id
        }).then(() => {})
        setIsWished(nextValue)
        // setIsWished(prev => !prev)  //Toggle

    }

    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <WishListButton wished={isWished} onClick={addToWishList}>
                        {isWished ? <HeartSolidIcon/> : <HeartOutlineIcon/>}
                    </WishListButton>
                    <img src={images?.[0]} alt="ProductBox test"/>
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <FlyingButton _id={_id} src={images?.[0]}>Add to cart</FlyingButton>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    )
}