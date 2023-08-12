import { styled } from "styled-components";
import NavBar from '../../components/NavBar/NavBar.jsx';
import Announcement from '../../components/Announcement/Announcement.jsx';
import Products from '../../components/Products/Products.jsx';
import Newsletter from '../../components/Newsletter/Newsletter.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { mobile } from '../../responsive.js';

const Container = styled.div`
  
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px%", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
  
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement/>
      <NavBar/>
      <Title>Vestidos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filtrar productos:
          </FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>Blanco</Option>
            <Option>Negro</Option>
            <Option>Rojo</Option>
            <Option>Azul</Option>
            <Option>Amarillo</Option>
            <Option>Verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Talla
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Ordenar productos:
          </FilterText>
          <Select>
            <Option>Novedades</Option>
            <Option>Precio (asc)</Option>
            <Option>Precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList;
