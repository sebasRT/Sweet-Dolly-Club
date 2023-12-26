import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import clientPromise from "."
import {Product} from "@/model/Product";

let client: MongoClient ;
let db: Db;
let products: Collection<Product>;


export async function  init () {
    if(db) return
    try {
        client = await clientPromise
        db =  client.db("Sweet-Dolly")
        products =  db.collection('products')
    } catch (error) {
        throw new Error('Failed to stablish connection to database' )
    }
}

;
(async ()=>{
    await init()
})

export async function  getProducts () {
    try {
        if (!products) await init()
        const result: Product[] = await products
        .find({})
        .map(product => ({...product}))
        .toArray()
     
        return {success:true, products: result, error: null};
    } catch (error) {

        return {success: false , error: 'Failed to get products',products: null}
    }
}

export async function  getProductById (id:string) {    

    try {
        if (!products) await init()
        const result = await products
        .findOne({ _id: new ObjectId(id) })
        
        return {product: result}
    } catch (error) {
        console.log(error);
        
        return {error: 'Failed to get product'}
    }finally{

    }

}

export async function createProduct(product: Product) {
    try {
      if (!products) await init();
      const result = await products.insertOne(product);
  
    return { success: true, result };
} catch (error: any) {
    
    return { success: false, error: error?.message  };
}
  }

  
export async function updateProduct(id: string, product: Product ) {
    try {
      if (!products) await init();
      const result = await products.replaceOne({_id: new ObjectId(id)},product );
    
      if (result.modifiedCount === 1) {
          return { success: true, result };
      } else{
        return {success: false , result}
      }
} catch (error: any) {
    
    return { success: false, error: error?.message  };
}
  }


export async function  deleteProductById (id: string) {
    try {
        if (!products) await init();
        const result = await products.deleteOne({_id: new ObjectId(id)});
      
        if (result.deletedCount === 1) {
            return { success: true, result };
        } else{
          return {success: false , result}
        }

  } catch (error: any) {
      
      return { success: false, error: error?.message  };
  }
  }
