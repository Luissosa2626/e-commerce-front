import Header from "@/components/Header";
import Feature from "@/components/Feature";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import {WishedProduct} from "@/models/WishedProduct";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Setting} from "@/models/Setting";

export default function HomePage({featuredProduct, newProducts, wishedNewProducts}) {
  return (
    <div>
      <Header/>
      <Feature product={featuredProduct}/>
      <NewProducts products={newProducts} wishedProducts={wishedNewProducts}/>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  
  const featuredProductSetting = await Setting.findOne({name:'featuredProductId'});
  const featuredProductId = featuredProductSetting.value; //64adb06f7b14e5a2122eb465
  
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10}); //-1 para que traiga el ultimo
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  
  const wishedNewProducts = session?.user
    ? await WishedProduct.find({
        userEmail:session.user.email,
        product: newProducts.map(p => p._id.toString()),
      })
    : [];
    
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)), // Para errores de serialized as JSON debo hacer el JSON.stringify
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      wishedNewProducts: wishedNewProducts.map(i => i.product.toString()),
    },
  };
}



