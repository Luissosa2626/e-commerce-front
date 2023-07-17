import Feature from "@/components/Feature";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({featuredProduct, newProducts}) {
  // console.log({newProducts});
  return (
    <div>
      <Header/>
      <Feature product={featuredProduct}/>
      <NewProducts products={newProducts}/>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64839beb838203092cbb2774'
  await mongooseConnect()
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10})  //-1 para que traiga el ultimo
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)), // Para errores de serialized as JSON debo hacer el JSON.stringify
      newProducts: JSON.parse(JSON.stringify(newProducts))
    } 
  }
}