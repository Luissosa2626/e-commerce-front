import Center from '@/components/Center';
import styled from 'styled-components';
import ButtonLink from '@/components/ButtonLink';
import CartIcon from '@/components/icons/Cart';
import FlyingButton from '@/components/FlyingButton';
import { RevealWrapper } from 'next-reveal';
import { colors } from '@/lib/colors';

const Bg = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='100%' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(119%2c 52%2c 231%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c281 C 57.6%2c264.4 172.8%2c148.6 288%2c198 C 403.2%2c247.4 460.8%2c530.2 576%2c528 C 691.2%2c525.8 748.8%2c235.4 864%2c187 C 979.2%2c138.6 1036.8%2c295.2 1152%2c286 C 1267.2%2c276.8 1382.4%2c170 1440%2c141L1440 560L0 560z' fill='rgba(205%2c 121%2c 245%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c451 C 96%2c363 288%2c22.8 480%2c11 C 672%2c-0.8 768%2c353.4 960%2c392 C 1152%2c430.6 1344%2c241.6 1440%2c204L1440 560L0 560z' fill='rgba(255%2c 254%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  color: ${colors.primary};
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  color: ${colors.text};
  text-shadow: 3px 3px 5px ${colors.secondary}, 6px 6px 5px ${colors.title},
    1px 1px 5px ${colors.text};
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: ${colors.primary};
  font-size: 1.2rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img.main {
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
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    & > div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
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
const CenterImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImgColumn = styled(Column)`
  & > div {
    width: 100%;
  }
`;

const ContentWrapper = styled.div``;

export default function Featured({ product }) {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <RevealWrapper origin={'left'} delay={0}>
                <ContentWrapper>
                  <Title>{product.title}</Title>
                  <Desc>{product.description}</Desc>
                  <ButtonsWrapper>
                    <ButtonLink
                      href={'/product/' + product._id}
                      outline={1}
                      primary={1}
                    >
                      Read more
                    </ButtonLink>
                    <FlyingButton
                      primary={1}
                      _id={product._id}
                      src={product.images?.[0]}
                    >
                      <CartIcon />
                      Add to cart
                    </FlyingButton>
                  </ButtonsWrapper>
                </ContentWrapper>
              </RevealWrapper>
            </div>
          </Column>
          <ImgColumn>
            <RevealWrapper delay={0}>
              <CenterImg>
                <img className={'main'} src={product.images?.[0]} alt="" />
              </CenterImg>
            </RevealWrapper>
          </ImgColumn>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}

//background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='100%' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(119%2c 52%2c 231%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c281 C 57.6%2c264.4 172.8%2c148.6 288%2c198 C 403.2%2c247.4 460.8%2c530.2 576%2c528 C 691.2%2c525.8 748.8%2c235.4 864%2c187 C 979.2%2c138.6 1036.8%2c295.2 1152%2c286 C 1267.2%2c276.8 1382.4%2c170 1440%2c141L1440 560L0 560z' fill='rgba(205%2c 121%2c 245%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c451 C 96%2c363 288%2c22.8 480%2c11 C 672%2c-0.8 768%2c353.4 960%2c392 C 1152%2c430.6 1344%2c241.6 1440%2c204L1440 560L0 560z' fill='rgba(255%2c 254%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
