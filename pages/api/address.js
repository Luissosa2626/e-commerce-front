import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Address} from "@/models/Address";

export default async function handle(req, res) {
    await mongooseConnect()
    const {user} = await getServerSession(req, res, authOptions)

    if (req.method === 'PUT') {
        const address = await Address.findOne({userEmail:user.email});
        if (address) {
          res.json(await Address.findByIdAndUpdate(address._id, req.body));
        } else {
          res.json(await Address.create({userEmail:user.email, ...req.body}));
        }
        // res.json(user)
      }
      if (req.method === 'GET') {
        const address = await Address.findOne({userEmail:user.email});
        res.json(address);
      }
}


/*
1ro - creo el modelo(Schema) del objeto a trabajar (Address, en este caso)
2do - creo el fetch en la pagina(account.js) con su metodo(put, en este caso), con su enlace('/api/address') y su data(enviar para actualizar, en este caso)(
    const data = {name, email, city, streetAddress, postalCode, country})
3ro - creo el api
*/