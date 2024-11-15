import Header from "@/components/Header";
import Center from "@/components/Center";
import Input from "@/components/Input";
import styled from "styled-components";
import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import ProductsGrid from "@/components/ProductsGrid"
import Spinner from "@/components/Spinner"
import {debounce} from "lodash";

const SearchInput = styled(Input)`
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.4rem;
`;

const InputWrapper = styled.div`
    position: sticky;
    top: 68px;
    padding: 5px 0;
    margin: 25px 0;
    background-color: #eeeeeeaaa;

`;

export default function SearchPage() {
    const [phrase, setPhrase] = useState('');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const debouncedSearch = useCallback(
        debounce(searchProducts, 500), []
    )
    
    useEffect(() => {
        if(phrase.length > 0) {
            setIsLoading(true)
            debouncedSearch(phrase)
        } else {
            setProducts([])
        }
    }, [phrase])

    function searchProducts(phrase) {
        axios.get('/api/products?phrase='+encodeURIComponent(phrase))
            .then(response => {
                setProducts(response.data)
                setIsLoading(false)
            })
    }


    return (
        <>
        <Header/>
        <Center>
            <InputWrapper>
                <SearchInput 
                    value={phrase}
                    onChange={e => setPhrase(e.target.value)}
                    autoFocus
                    placeholder="Search for products..."/>
            </InputWrapper>
                {!isLoading && phrase !== '' && products.length === 0 && (
                    <h2>No products found for &quot;{phrase}&quot;</h2>
                )}
                {isLoading && (
                    <Spinner fullWidth={true}/>
                )}
                {!isLoading && products.length > 0 && (
                    <ProductsGrid products={products}/>
                )}
        </Center>
        </>
    )
}