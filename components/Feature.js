import Center from "@/components/Center";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/Cart";
import FlyingButton from "@/components/FlyingButton";
import {RevealWrapper} from 'next-reveal'

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 2rem;
    @media screen and (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Desc = styled.p`
    color: #aaa;
    font-size: 1.2rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    img.main{
        max-width: 100%;
        max-height: 200px;
        display: block;
        margin: 0 auto;
    }
    div:nth-child(1) {
        order: 2;
        margin-left: auto;
        margin-right: auto;
    }
    // div:nth-child(2) {
    //     text-align: center;
    // }
    @media screen and (min-width: 768px) {
        grid-template-columns: 1.1fr .9fr;
        div:nth-child(1) {
            order: 0;
        }
        img{
            max-width: 100%
        }
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

export default function Feature({product}) {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <RevealWrapper origin={'left'} delay={0}>
                                <Title>{product.title}</Title>
                                <Desc>{product.description}</Desc>
                                <ButtonsWrapper>
                                    <ButtonLink href={'/product/'+product._id} outline={1} white={1} >Read more</ButtonLink>
                                    <FlyingButton white={1} _id={product._id} src={product.images?.[0]}>
                                        <CartIcon />
                                        Add to cart
                                    </FlyingButton>
                                </ButtonsWrapper>
                            </RevealWrapper>
                        </div>
                    </Column>
                    <Column>
                    <RevealWrapper delay={0}>
                        <img className={'main'} src={product.images?.[0]} alt=""/>
                    </RevealWrapper>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    )
}